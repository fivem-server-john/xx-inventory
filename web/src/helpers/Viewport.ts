
interface ContextOffset {
    viewportId: number;

    top: number;
    left: number;
}

const contextOffsets: ContextOffset[] = [
    {
        viewportId: 1,
        top: -180,
        left: -345
    },
    {
        viewportId: 2,
        top: -360,
        left: -670
    },
    
]
    
interface ViewportType {
    id: number;
    maxInnerHeight: number;

    width: number;
    height: number;
}

const viewportSizes: ViewportType[] = [
    {
        id: 1,
        maxInnerHeight: 900,

        width: 1080,
        height: 630,
    }
]

let innerHeight = window.innerHeight;
console.log(innerHeight);
let viewportId = InnerHeightToViewportId(innerHeight)
console.log(viewportId);

export function GetContextOffset(): ContextOffset {

    let offset = contextOffsets.find((offset) => offset.viewportId == viewportId)

    if (offset === undefined) return contextOffsets[0];

    return offset;
   
}

export function GetInventorySize() {
    let viewport = viewportSizes.find((viewport) => viewport.id == viewportId);

    if (viewport === undefined) viewport = viewportSizes[0];

    return [viewport.width, viewport.height]
}

function InnerHeightToViewportId(innerHeight: number) {
    let id = 1;
    let currentMax = 0;
    for (let i = 0; i < viewportSizes.length; i++) {
        const element = viewportSizes[i];
        if (element.maxInnerHeight <= innerHeight && element.maxInnerHeight > currentMax) {
            currentMax = element.maxInnerHeight;
            id = element.id;
        }
    }

    return id;
}