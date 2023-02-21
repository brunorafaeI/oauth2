class DatabaseMessage {
  private static messageReturn: string;

  public static message01EX01(errorMessage: any): string {
    return (this.messageReturn = `01EX01 - Error connection database - ${errorMessage}`);
  }
}

export { DatabaseMessage };
