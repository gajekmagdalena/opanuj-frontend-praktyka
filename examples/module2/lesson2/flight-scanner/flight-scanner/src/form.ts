import { z } from 'zod';

const dateFormat = /^([0-3]\d)-([0-1][0-9])-[0-9]{4}$/;

export const FormSchema = z.object({
  origin: z
    .string()
    .min(3, { message: 'Origin must be at least 3 characters long' }),
  destination: z
    .string()
    .min(3, { message: 'Destination must be at least 3 characters long' }),
  startDate: z.string().refine((value) => dateFormat.test(value), {
    message: 'Incorrect Start date format (required DD-MM-YYYY)',
  }),
  endDate: z.string().refine((value) => dateFormat.test(value), {
    message: 'Incorrect End date format (required DD-MM-YYYY)',
  }),
  trip: z
    .enum(['one-way', 'round-trip'])
    .refine((value) => ['one-way', 'round-trip'].includes(value), {
      message: 'Please select trip type',
    }),
});

export type FormFields = z.infer<typeof FormSchema>;
