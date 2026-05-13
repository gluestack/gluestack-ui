'use client';
import { useState } from 'react';
import type React from 'react';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';

const selectClasses =
  'w-full rounded-md border border-outline-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background-0 text-typography-900';

const inputClasses =
  'w-full rounded-md border border-outline-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500';

const interestOptions = [
  'Enterprise License',
  'Custom Development',
  'Team Training',
  'Consulting',
  'Other',
];

const budgetOptions = [
  'Under $10k',
  '$10k - $50k',
  '$50k - $100k',
  '$100k+',
  'Not sure / Prefer not to say',
];

const EnterpriseContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    budget: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const MESSAGE_MIN_LENGTH = 20;

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
    setMessage(null);

    try {
      const res = await fetch('/api/enterprise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setMessage(
          'Thank you! Our enterprise team will be in touch within 1 business day.'
        );
        setForm({
          name: '',
          email: '',
          company: '',
          role: '',
          interest: '',
          budget: '',
          message: '',
        });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('Failed to submit. Please try again later.');
    }
    setLoading(false);
  };

  const canSubmit =
    form.email && form.interest && form.message.length >= MESSAGE_MIN_LENGTH;

  return (
    <Box className="pt-20 mt-56 xl:mt-24">
      <Box className="items-start lg:flex-row">
        {/* Left Content */}
        <VStack className="justify-center mb-16 sm:mx-auto lg:w-[60%] lg:pr-2 lg:mb-0 max-w-[1000px]">
          <Heading className="font-bold leading-[48px] max-w-[750px] my-0 text-4xl md:text-6xl md:leading-[72px] lg:mx-0 text-typography-900">
            Enterprise Solutions
          </Heading>
          <Text className="text-typography-700 leading-8 mt-2 text-2xl max-w-[750px]">
            Need gluestack at scale? From enterprise licensing to custom
            development and team training, we can help.
          </Text>

          <Box className="gap-6 mt-8 sm:flex-row flex-wrap">
            <Text className="text-typography-700 text-xl leading-7 font-medium">
              TAILORED FOR
            </Text>
            {interestOptions.map((item, index) => (
              <HStack className="gap-2 items-center" key={index}>
                <Text className="text-typography-700 text-xl leading-7 font-medium">
                  {item}
                </Text>
                {index < interestOptions.length - 1 && (
                  <Text className="text-typography-500 text-xl leading-7">
                    |
                  </Text>
                )}
              </HStack>
            ))}
          </Box>
        </VStack>

        {/* Right Form */}
        <Box className="flex-1 relative rounded-xl overflow-hidden border border-outline-50 bg-background-50 p-8">
          <Text className="text-2xl leading-8 font-medium mb-6 text-typography-900">
            Get in Touch
          </Text>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                Full name{' '}
                <Text className="text-typography-500">(optional)</Text>
              </Text>
              <input
                name="name"
                placeholder="e.g., Jane Doe"
                value={form.name}
                onChange={handleChange}
                aria-label="Full name"
                className={inputClasses}
              />
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                Work email <Text className="text-danger-600">*</Text>
              </Text>
              <input
                name="email"
                type="email"
                placeholder="e.g., jane@company.com"
                required
                value={form.email}
                onChange={handleChange}
                aria-label="Work email"
                className={inputClasses}
              />
              <Text className="text-xs mt-1 text-typography-600">
                We'll only use this to contact you about your inquiry.
              </Text>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                Company <Text className="text-typography-500">(optional)</Text>
              </Text>
              <input
                name="company"
                placeholder="e.g., Acme Inc."
                value={form.company}
                onChange={handleChange}
                aria-label="Company"
                className={inputClasses}
              />
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                Role / Title{' '}
                <Text className="text-typography-500">(optional)</Text>
              </Text>
              <input
                name="role"
                placeholder="e.g., VP Engineering, CTO"
                value={form.role}
                onChange={handleChange}
                aria-label="Role or title"
                className={inputClasses}
              />
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                What are you interested in?{' '}
                <Text className="text-danger-600">*</Text>
              </Text>
              <select
                name="interest"
                required
                value={form.interest}
                onChange={handleChange}
                aria-label="Interest area"
                className={selectClasses}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                Budget range{' '}
                <Text className="text-typography-500">(optional)</Text>
              </Text>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                aria-label="Budget range"
                className={selectClasses}
              >
                <option value="" disabled>
                  Select a range
                </option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-typography-700">
                How can we help? <Text className="text-danger-600">*</Text>
              </Text>
              <textarea
                name="message"
                placeholder="Tell us about your project, team, or requirements..."
                required
                value={form.message}
                onChange={handleChange}
                aria-label="Your message"
                className="w-full min-h-[140px] rounded-md border border-outline-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <HStack className="items-center justify-between mt-1">
                <Text className="text-xs text-typography-600">
                  More context helps us prepare a tailored response.
                </Text>
                <Text className="text-xs text-typography-600">
                  {form.message.length}/{1000}
                </Text>
              </HStack>
              {form.message.length > 0 &&
                form.message.length < MESSAGE_MIN_LENGTH && (
                  <Text className="text-xs mt-1 text-danger-600">
                    Please add a bit more detail (
                    {MESSAGE_MIN_LENGTH - form.message.length} more characters).
                  </Text>
                )}
            </Box>

            <button
              type="submit"
              disabled={loading || !canSubmit}
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 hover:bg-primary-700 disabled:opacity-50 text-typography-0"
            >
              {loading ? 'Submitting...' : 'Submit inquiry'}
            </button>
            <Text className="text-xs text-typography-600">
              Our enterprise team typically replies within 1 business day.
            </Text>
            {message && (
              <Text className="mt-2" role="alert">
                {message}
              </Text>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EnterpriseContactForm;
