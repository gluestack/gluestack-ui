'use client';
import { useState } from 'react';
import type React from 'react';
import NextImage from 'next/image';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';

const data = [
  { icon: '/images/contact-us/technical.svg', name: 'Technical Issues' },
  { icon: '/images/contact-us/dashicons-update.svg', name: 'Upcoming Updates' },
  { icon: '/images/contact-us/question-fill.svg', name: 'Queries' },
];

const SupportFormFold = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    query: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const QUERY_MIN_LENGTH = 20;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setMessage('✅ Thank you! We’ll get back to you soon.');
        setForm({ name: '', email: '', company: '', query: '' });
      } else {
        setMessage('⚠️ Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('❌ Failed to submit. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <Box className="pt-20 mt-56 xl:mt-24">
      <Box className="items-center lg:flex-row">
        {/* Left Content */}
        <VStack className="justify-center mb-16 sm:mx-auto lg:w-[60%] lg:pr-2 lg:mb-0 max-w-[1000px]">
          <Heading className="font-bold leading-[48px] max-w-[750px] my-0 text-4xl md:text-6xl md:leading-[72px] lg:mx-0 text-foreground">
            How Can We Help?
          </Heading>
          <Text className="text-foreground/70 leading-8 mt-2 text-2xl max-w-[750px]">
            If you are using gluestack and are facing issues, you can ask our
            Geeks for direct support here.
          </Text>

          <Box className="gap-6 mt-8 sm:flex-row flex-wrap">
            <Text className="text-foreground/70 text-xl leading-7 font-medium">
              ASK ABOUT
            </Text>
            {data.map((item, index) => (
              <HStack className="gap-2 items-center" key={index}>
                <NextImage
                  src={item.icon}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt={item.name + ' image'}
                />
                <Text className="text-foreground/70 text-xl leading-7 font-medium">
                  {item.name}
                </Text>
              </HStack>
            ))}
            <Text className="text-foreground/70 text-xl leading-7 font-medium">
              + more
            </Text>
          </Box>
        </VStack>

        {/* Right Form */}
        <Box className="flex-1 relative rounded-xl overflow-hidden border border-border bg-background/90 p-8">
          <Text className="text-2xl leading-8 font-medium mb-6 text-foreground/90">
            Contact gluestack Support
          </Text>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Box>
              <Text className="text-sm mb-1 text-foreground/70">
                Full name{' '}
                <Text className="text-foreground/50">(optional)</Text>
              </Text>
              <input
                name="name"
                placeholder="e.g., Jane Doe"
                value={form.name}
                onChange={handleChange}
                aria-label="Full name"
                className="w-full rounded-md border border-border/80 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background/90"
              />
              <Text className="text-xs mt-1 text-foreground/60">
                Helps us personalize our reply.
              </Text>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-foreground/70">
                Work email <Text className="text-destructive">*</Text>
              </Text>
              <input
                name="email"
                type="email"
                placeholder="e.g., jane@company.com"
                required
                value={form.email}
                onChange={handleChange}
                aria-label="Email address"
                className="w-full rounded-md border border-border/80 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background/90"
              />
              <Text className="text-xs mt-1 text-foreground/60">
                We’ll only use this to contact you about this request.
              </Text>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-foreground/70">
                Company <Text className="text-foreground/50">(optional)</Text>
              </Text>
              <input
                name="company"
                placeholder="e.g., Acme Inc."
                value={form.company}
                onChange={handleChange}
                aria-label="Company"
                className="w-full rounded-md border border-border/80 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background/90"
              />
              <Text className="text-xs mt-1 text-foreground/60">
                Useful if you’re on a team plan or enterprise.
              </Text>
            </Box>

            <Box>
              <Text className="text-sm mb-1 text-foreground/70">
                How can we help? <Text className="text-destructive">*</Text>
              </Text>
              <textarea
                name="query"
                placeholder="Briefly describe the issue or question. Include steps to reproduce, expected vs. actual behavior, error messages, links, versions, or environment details if relevant."
                required
                value={form.query}
                onChange={handleChange}
                aria-label="Your message"
                className="w-full min-h-[140px] rounded-md border border-border/80 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background/90"
              />
              <HStack className="items-center justify-between mt-1">
                <Text className="text-xs text-foreground/60">
                  Tip: More context helps us resolve your issue faster.
                </Text>
                <Text className="text-xs text-foreground/60">
                  {form.query.length}/{1000}
                </Text>
              </HStack>
              {form.query.length > 0 &&
                form.query.length < QUERY_MIN_LENGTH && (
                  <Text className="text-xs mt-1 text-destructive">
                    Please add a bit more detail (
                    {QUERY_MIN_LENGTH - form.query.length} more characters).
                  </Text>
                )}
            </Box>

            <button
              type="submit"
              disabled={loading || form.query.length < QUERY_MIN_LENGTH}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 hover:bg-primary/80 disabled:opacity-50 text-primary-foreground"
            >
              {loading ? 'Submitting…' : 'Submit request'}
            </button>
            <Text className="text-xs text-foreground/60">
              Our team typically replies within 1–2 business days.
            </Text>
            {message && <Text className="mt-2">{message}</Text>}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportFormFold;
