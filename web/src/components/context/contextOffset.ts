interface Offset {
    height: number;
    width: number;

    top: number;
    left: number;
}

const offsets: Offset[] = [
    {
        height: 1080,
        width: 1920,
        top: -180,
        left: -345
    },
    {
        height: 1440,
        width: 2560,
        top: -360,
        left: -670
    },
    
]

export function GetOffset(width: number, height: number): Offset {
    let offsetToUse = offsets.find((o) => o.width === width && o.height === height);
    if (!offsetToUse) {
        offsetToUse = offsets[0];
    }
    return offsetToUse;
}