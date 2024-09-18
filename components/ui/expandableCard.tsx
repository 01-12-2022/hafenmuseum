"use client"

import { Card } from '@/components/ui/card'
import { ReactNode, useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { jgborders } from '@/lib/utils'

type ExpandableCardProps = {
    icon?: ReactNode
    title: string
    children: ReactNode
}
const ExpandableCard = ({ icon, title, children }: ExpandableCardProps) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const onClick = () => {
        setIsExpanded(p => !p)
    }

    return (<Card style={{ padding: 15, margin: 12 }} onClick={onClick}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ placeSelf: 'flex-start' }}>
                {icon}
            </div>
            <h1 style={{ flexGrow: 1, textAlign: 'start', marginLeft: 8, marginRight: 5, fontWeight: '600' }}>{title}</h1>
            <div style={{ placeSelf: 'flex-end' }}>
                {(isExpanded)
                    ? <ArrowUp />
                    : <ArrowDown />}
            </div>
        </div>

        {(isExpanded)
            ? <div style={{ marginTop: 12 }}>
                <hr />
                <div style={{ marginTop: 5 }} />
                {children}
            </div>
            : null}
    </Card>)
}

export default ExpandableCard