'use client';
import { useState } from 'react';
import type React from 'react';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

const selectClasses =
  'w-full rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground';

const inputClasses =
  'w-full rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring';

const typeOptions = ['Talk', 'Workshop', 'Project Contribution'];

const CFPForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    title: '',
    abstract: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const ABSTRACT_MIN_LENGTH = 50;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/cfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatusMessage(
          "Thank you! We'll review your proposal and get back to you."
        );
        setForm({
          name: '',
          email: '',
          type: '',
          title: '',
          abstract: '',
          bio: '',
        });
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatusMessage('Failed to submit. Please try again later.');
    }
    setLoading(false);
  };

  const canSubmit =
    form.name &&
    form.email &&
    form.type &&
    form.title &&
    form.abstract.length >= ABSTRACT_MIN_LENGTH;

  return (
    <Box className="flex-1 relative rounded-xl overflow-hidden border border-border bg-background p-8">
      <Text className="text-2xl leading-8 font-medium mb-6 text-foreground">
        Submit a Proposal
      </Text>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Full name <Text className="text-destructive">*</Text>
          </Text>
          <input
            name="name"
            placeholder="e.g., Pat Developer"
            required
            value={form.name}
            onChange={handleChange}
            aria-label="Full name"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Email <Text className="text-destructive">*</Text>
          </Text>
          <input
            name="email"
            type="email"
            placeholder="e.g., pat@company.com"
            required
            value={form.email}
            onChange={handleChange}
            aria-label="Email address"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Proposal type <Text className="text-destructive">*</Text>
          </Text>
          <select
            name="type"
            required
            value={form.type}
            onChange={handleChange}
            aria-label="Proposal type"
            className={selectClasses}
          >
            <option value="" disabled>
              Select a type
            </option>
            {typeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Title <Text className="text-destructive">*</Text>
          </Text>
          <input
            name="title"
            placeholder="e.g., Building Accessible Forms with gluestack"
            required
            value={form.title}
            onChange={handleChange}
            aria-label="Proposal title"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Abstract / Description <Text className="text-destructive">*</Text>
          </Text>
          <textarea
            name="abstract"
            placeholder="Describe your talk, workshop, or project contribution in detail..."
            required
            value={form.abstract}
            onChange={handleChange}
            aria-label="Abstract or description"
            className="w-full min-h-[140px] rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Box className="flex items-center justify-between mt-1">
            <Text className="text-xs text-muted-foreground">
              Provide enough detail for us to evaluate your proposal.
            </Text>
            <Text className="text-xs text-muted-foreground">
              {form.abstract.length}/{2000}
            </Text>
          </Box>
          {form.abstract.length > 0 &&
            form.abstract.length < ABSTRACT_MIN_LENGTH && (
              <Text className="text-xs mt-1 text-destructive">
                Please add more detail (
                {ABSTRACT_MIN_LENGTH - form.abstract.length} more characters).
              </Text>
            )}
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Bio <Text className="text-muted-foreground">(optional)</Text>
          </Text>
          <textarea
            name="bio"
            placeholder="Tell us about yourself, your experience, and your connection to the gluestack community..."
            value={form.bio}
            onChange={handleChange}
            aria-label="Your bio"
            className="w-full min-h-[100px] rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </Box>

        <button
          type="submit"
          disabled={loading || !canSubmit}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 hover:bg-primary/90 disabled:opacity-50 text-primary-foreground"
        >
          {loading ? 'Submitting...' : 'Submit proposal'}
        </button>
        {statusMessage && (
          <Text className="mt-2" role="alert">
            {statusMessage}
          </Text>
        )}
      </form>
    </Box>
  );
};

export default CFPForm;
