'use client'

import { MeshGradient, MeshGradientProps, DotOrbit, DotOrbitParams, PulsingBorderProps, PulsingBorder, pulsingBorderPresets } from '@paper-design/shaders-react'

export function MeshGradientComponent({ ...props }: MeshGradientProps) {
    return <MeshGradient {...props} />
}
export function DotOrbitComponent({ ...props }: DotOrbitParams) {
    return <DotOrbit {...props} />
}
export function PulsingBorderComponent({ ...props }: PulsingBorderProps) {
    return <PulsingBorder {...props} />
}
{/* <DotOrbitComponent
    colors={['#d2822d', '#0c3b7e', '#b31a57', '#37a066']}
    colorBack={'#000000'}
    scale={0.3}
    style={{ width: 200, height: 200 }}
/> */}