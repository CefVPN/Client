import React from 'react'
import { IconHome, IconFileImport, IconSettings, IconPalette } from '@tabler/icons-react';

export const SidebarData = [
    {
        title: "Home",
        icon: <IconHome />,
        link: "/"
    },
    {
        title: "Import Profile",
        icon: <IconFileImport />
    },
    {
        title: "Themify",
        icon: <IconPalette />
    },
    {
        title: "Settings",
        icon: <IconSettings />,
        link: "/config"
    }
]