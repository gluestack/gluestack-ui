import { confirm, isCancel, cancel } from '@clack/prompts';

export async function getConfirmation(message: string): Promise<boolean> {
  const confirmInput = await confirm({
    message: message,
  });
  if (isCancel(confirmInput)) {
    cancel('Operation cancelled.');
    process.exit(1);
  }
  return confirmInput;
}
