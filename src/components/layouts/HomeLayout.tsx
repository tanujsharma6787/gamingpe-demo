type LayoutProps = {
    children: React.ReactNode;
};
const HomeLayout = ({children}: LayoutProps): JSX.Element => {

    return (
        <div className="bg-blue-400">{children}</div>
    );
};

export default HomeLayout;
