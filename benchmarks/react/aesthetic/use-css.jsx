import React, { useMemo } from 'react';
import { useCss } from '@aesthetic/react';

export default function Aesthetic() {
  const styles = useMemo(() => ({ display: 'block' }), []);
  const className = useCss(styles);

  return <div className={className} />;
}
