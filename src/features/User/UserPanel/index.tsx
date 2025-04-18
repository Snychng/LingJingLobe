'use client';

import { Popover } from 'antd';
import { createStyles } from 'antd-style';
import { PropsWithChildren, memo, useState } from 'react';

import PanelContent from './PanelContent';
import UpgradeBadge from './UpgradeBadge';
// import { useNewVersion } from './useNewVersion';

const useStyles = createStyles(({ css }) => ({
  popover: css`
    inset-block-start: 8px !important;
    inset-inline-start: 8px !important;
  `,
}));

const UserPanel = memo<PropsWithChildren>(({ children }) => {
  // const hasNewVersion = false;
  const [open, setOpen] = useState(false);
  const { styles } = useStyles();

  return (
    <UpgradeBadge showBadge={false}>
      <Popover
        arrow={false}
        content={<PanelContent closePopover={() => setOpen(false)} />}
        onOpenChange={setOpen}
        open={open}
        placement={'topRight'}
        rootClassName={styles.popover}
        styles={{
          body: { padding: 0 },
        }}
        trigger={['click']}
      >
        {children}
      </Popover>
    </UpgradeBadge>
  );
});

UserPanel.displayName = 'UserPanel';

export default UserPanel;
