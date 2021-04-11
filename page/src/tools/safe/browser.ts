export class BrowserInfo {
    public getAppCodeName = (): string => window.navigator.appCodeName

    public getAppName = (): string => window.navigator.appName

    public getAppVersion = (): string => window.navigator.appVersion

    public getLangeuage = (): string => window.navigator.language

    public getPlatform = (): string => window.navigator.platform

    public getProduct = (): string => window.navigator.product

    public getProductSub = (): string => window.navigator.productSub

    public getUserAgent = (): string => window.navigator.userAgent

    public getHardwareConcurrency = (): number => window.navigator.hardwareConcurrency

    public isWebdriver = (): boolean => window.navigator.webdriver

    public getTimeZone = (): number => new Date().getTimezoneOffset()

    public getColorDepth = (): number => window.screen.colorDepth

    public getClientSize(): {width: number, height: number} {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }

    public getScreenSize(): {width: number, height: number} {
        return {
            width: window.screen.width,
            height: window.screen.height
        }
    }

    public getGeolocation(): {latitude: number, longitude: number} {
        let data = {} as {latitude: number, longitude: number}

        navigator.geolocation.getCurrentPosition(
            position => {
                const {latitude, longitude} = position.coords
                data = {
                    latitude,
                    longitude
                }
            },
            error => {
                throw error
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        )

        return data
    }
}

export class Canvas {
    static bin2hex(data: string): string {
        let res: string = ''

        for (let i=0; i < data.length; i++) {
            const h = data.charCodeAt(i).toString(16)
            res += h.length < 2 ? '0' + h : h
        }

        return res
    }

    public get(data: string): string {
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!

        ctx.textBaseline = "top"
        ctx.font = "16px Arial"
        ctx.fillStyle = "#fb7da7"
        ctx.fillRect(11, 22, 33, 44)
        ctx.fillStyle = "#af98e6"
        ctx.fillStyle = "rgba(240, 128, 128, 0.9)"
        ctx.fillText(data, 4, 1 << 5)
        
        const toBinString: string = canvas.toDataURL().replace("data:image/png;base64,","")
        return Canvas.bin2hex(atob(toBinString).slice(-24, -12))
    }
}

export class UA {
    static getUserAgent = (): string => window.navigator.userAgent

    static isMobile = (): boolean => /(Android|ios|iPhone|iPad|iPod|webOS|BlackBerry)/i.test(UA.getUserAgent())
}

  
export const isWebdriver = (): boolean => window.navigator.webdriver
