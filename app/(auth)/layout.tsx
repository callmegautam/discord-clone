const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-primary">
            <div className="w-full max-w-md">{children}</div>
        </div>
    );
};

export default AuthLayout;
