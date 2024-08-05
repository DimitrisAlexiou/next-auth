import { signOut } from "@/auth";

const SettingsPage = async () => {
    return (
        <div>
            Settings

            <form action={async () => {
                'use server';

                await signOut();
            }}>
                <button type="submit">
                    Sign Out
                </button>
            </form>
        </div>
    )
}

export default SettingsPage;