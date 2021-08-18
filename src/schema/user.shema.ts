import { object, string, ref } from 'yup';

export const createUserSchema = object({
    body: object({
        name: string().required("Name is required"),
        password: string()
            .required("password is required")
            .min(6, "Password is too short - should be 6 chars minimun.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
            passwordConfirmation: string().oneOf(
                [ref("password"), null],
                "password mush match",
            ),
            email: string()
                .email("Must be a validate email")
                .required("Email is required"),
    }),
});