import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_******',
            'template_0vgeryl',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'public key'
        )
    }

    return (
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Contact</h3>

            <p>Email: contact@ikkrit.com</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <div className="mb-3">
                    <label className="block" htmlFor="subject">Sujet de la demande</label>
                    <input {...register("subject")} className="border" name="subject" id="subject" type="text" placeholder="Quel est la demande ?"/>
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="email">Email</label>
                    <input {...register("email", {required:true})} className="border" name="email" id="email" type="text" placeholder="Votre email"/>
                    {errors.email && <p className="text-[red]">Email requis</p>}
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="message">Message</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message"/>
                </div>

                <input type="submit" className="block bg-[red] text-[white] py-3 px-3 hover:bg-[gray]"/>
            </form>
        </main>
    )
}