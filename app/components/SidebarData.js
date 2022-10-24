import React from 'react'
import { IconHome } from '@tabler/icons';
import { IconFileImport } from '@tabler/icons';
import { IconSettings } from '@tabler/icons';
import { IconPalette } from '@tabler/icons';

export const SidebarData = [
    {
        title: "Home",
        icon: <IconHome />,
        link: "/"
    },
    {
        title: "Import Profile",
        icon: <IconFileImport />,
        link: "/import"
    },
    {
        title: "Settings",
        icon: <IconSettings />,
        link: "/config"
    },
    {
        title: "Themify",
        icon: <IconPalette />
    }
]