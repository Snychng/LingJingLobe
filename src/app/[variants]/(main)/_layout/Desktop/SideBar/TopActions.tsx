import { ActionIcon } from '@lobehub/ui';
// import { FolderClosed, MessageSquare } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
// import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  isPinned?: boolean | null;
  tab?: SidebarTabKey;
}

const TopActions = memo<TopActionProps>(({ tab, isPinned }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);
  // const { enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);

  return (
    <Link
      aria-label={t('tab.chat')}
      href={'/chat'}
      onClick={(e) => {
        e.preventDefault();
        switchBackToChat(useSessionStore.getState().activeId);
      }}
    >
      <ActionIcon
        active={tab === SidebarTabKey.Chat && !isPinned}
        icon={MessageSquare}
        placement={'right'}
        size="large"
        title={t('tab.chat')}
      />
    </Link>
  );
});

export default TopActions;
