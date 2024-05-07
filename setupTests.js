import { afterEach } from 'vitest';
import { cleanup, configure } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

configure({ asyncUtilTimeout: 5000 });

afterEach(() => {
  cleanup();
});
