import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';

class JSONReporter implements Reporter {
  private results: any[] = [];

  onTestEnd(test: TestCase, result: TestResult) {
    this.results.push({
      title: test.title,
      status: result.status,
      duration: result.duration,
      errors: result.errors,
    });
  }

  async onEnd() {
    fs.writeFileSync('test-results.json', JSON.stringify(this.results, null, 2));
    console.log(' Test results written to test-results.json');
  }
}

export default JSONReporter;
