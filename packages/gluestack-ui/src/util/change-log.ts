interface ChangeLogEntry {
  filePath: string;
  action: 'modified' | 'added' | 'deleted';
}

const changeLog: ChangeLogEntry[] = [];

export function logChange(
  filePath: string,
  action: 'modified' | 'added' | 'deleted'
) {
  changeLog.push({ filePath, action });
}

export function getChangeLog() {
  return changeLog;
}
