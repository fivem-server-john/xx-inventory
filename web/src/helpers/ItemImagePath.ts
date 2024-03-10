import { isEnvBrowser } from "../utils/misc";

export function getImagePath(name: string) {

    if (isEnvBrowser()) {
        return '/images/' + name + '.png';
    }

    return 'nui://xx-inventory/web/images/' + name + '.png';
}