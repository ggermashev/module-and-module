import {Range} from "react-range";


export function CustomRange(props: {value: number[], setValue: (val: number[]) => void}) {
    return (
        <Range
            step={100}
            min={0}
            max={10000}
            values={props.value}
            onChange={(values) => props.setValue(values)}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '30px',
                        width: '120px',
                        backgroundColor: 'black'
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '30px',
                        width: '30px',
                        backgroundColor: 'orangered'
                    }}
                />
            )}
        />
    )
}