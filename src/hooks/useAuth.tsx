// "use client";

// import { useState, useEffect } from "react";
// import { auth } from "@/firebase";
// import { onAuthStateChanged, User } from "firebase/auth";

// export function useAuth() {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     return { user, loading };
// }