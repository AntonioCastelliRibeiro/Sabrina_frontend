export interface IMyNavbar {
    hanldeOpenModal(): any;
    children?: React.ReactElement;
    window?: () => Window;
}

export interface IPages {
    page: string,
    router: string,
    icon: React.ReactNode
}