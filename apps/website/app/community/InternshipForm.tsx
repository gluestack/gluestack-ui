'use client';
import { useState } from 'react';
import type React from 'react';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

const selectClasses =
  'w-full rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground';

const inputClasses =
  'w-full rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring';

const areaOptions = [
  'Design',
  'Frontend Development',
  'Backend Development',
  'DevOps',
  'Technical Writing',
  'Other',
];

const InternshipForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    university: '',
    areaOfInterest: '',
    portfolioUrl: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
      const res = await fetch('/api/internship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatusMessage("Thank you! We'll review your application and get back to you.");
        setForm({
          name: '',
          email: '',
          university: '',
          areaOfInterest: '',
          portfolioUrl: '',
          message: '',
        });
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatusMessage('Failed to submit. Please try again later.');
    }
    setLoading(false);
  };

  const canSubmit = form.email && form.areaOfInterest;

  return (
    <Box className="flex-1 relative rounded-xl overflow-hidden border border-border bg-background p-8">
      <Text className="text-2xl leading-8 font-medium mb-6 text-foreground">
        Apply for Internship
      </Text>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Full name{' '}
            <Text className="text-muted-foreground">(optional)</Text>
          </Text>
          <input
            name="name"
            placeholder="e.g., Alex Chen"
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
            placeholder="e.g., alex@university.edu"
            required
            value={form.email}
            onChange={handleChange}
            aria-label="Email address"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            University / Major{' '}
            <Text className="text-muted-foreground">(optional)</Text>
          </Text>
          <input
            name="university"
            placeholder="e.g., MIT, Computer Science"
            value={form.university}
            onChange={handleChange}
            aria-label="University or major"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Area of interest <Text className="text-destructive">*</Text>
          </Text>
          <select
            name="areaOfInterest"
            required
            value={form.areaOfInterest}
            onChange={handleChange}
            aria-label="Area of interest"
            className={selectClasses}
          >
            <option value="" disabled>
              Select an area
            </option>
            {areaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Portfolio / GitHub URL{' '}
            <Text className="text-muted-foreground">(optional)</Text>
          </Text>
          <input
            name="portfolioUrl"
            type="url"
            placeholder="e.g., https://github.com/your-username"
            value={form.portfolioUrl}
            onChange={handleChange}
            aria-label="Portfolio or GitHub URL"
            className={inputClasses}
          />
        </Box>

        <Box>
          <Text className="text-sm mb-1 text-muted-foreground">
            Anything else?{' '}
            <Text className="text-muted-foreground">(optional)</Text>
          </Text>
          <textarea
            name="message"
            placeholder="Tell us about yourself, your interests, or why you'd like to intern with gluestack..."
            value={form.message}
            onChange={handleChange}
            aria-label="Additional message"
            className="w-full min-h-[120px] rounded-md border border-border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </Box>

        <button
          type="submit"
          disabled={loading || !canSubmit}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 hover:bg-primary/90 disabled:opacity-50 text-primary-foreground"
        >
          {loading ? 'Submitting...' : 'Submit application'}
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

export default InternshipForm;
