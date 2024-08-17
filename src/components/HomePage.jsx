import React from 'react';
import GlitchText from '@johnn-e/react-glitch-text';

const HomePage = () => {
    return (
    <div>
        <div className="text-4xl">
            <GlitchText $text='Joshua' style={{ color: '#000', fontSize: "200px" }} $colorA="#ffbe0b" $colorB="#123abc" />
        </div>
    </div>
  )
}

export default HomePage