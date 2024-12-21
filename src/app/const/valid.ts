// validation.pattern.ts

export const VALIDATION_PATTERNS = {
    gstno: `/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9]{1}[A-Z]{1}[Z]{1}[0-9A-Z]{1}$/`,  // GST No. validation pattern
    panno: `/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/`, // PAN No. validation pattern
    code: `/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/`, // PAN No. validation pattern
    mobileno:'^\+91-[6-9][0-9]{9}$'

  };
  