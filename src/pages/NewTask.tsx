import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormSchemaType } from "../schemas/test.schema";
import formSchema from "../schemas/test.schema";
import useTest from "../store/testStote";

export default function NewTask() {
  const { name, lastName, age, changeAge, changeLastNAme, changeNAme } =
    useTest();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      lastName,
      age,
    },
  });
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    changeAge(data.age);
    changeNAme(data.name);
    changeLastNAme(data.lastName);
  };
  const userName = watch("name");

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        action=""
      >
        <input
          defaultValue=""
          {...register("name", { required: true })}
          type="text"
          placeholder="name"
          className="w-sm p-2 border-2 border-violet-200"
        />
        {errors.name && (
          <span className="text-red-500">le nom est obligatoire</span>
        )}

        <div>
          <input
            defaultValue=""
            {...register("lastName", { required: true })}
            type="text"
            placeholder="lastname"
            className="w-sm p-2 border-2 border-violet-200"
          />
          {errors.name && (
            <span className="text-red-500">le nom est obligatoire</span>
          )}
        </div>
        <input
          defaultValue=""
          {...register("age")}
          type="text"
          placeholder="age"
          className="w-sm p-2 border-2 border-violet-200"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => reset()}
          type="button"
          className="p-1 text-xs text-violet-300 bg-black w-fit self-center rounded-md cursor-pointer"
        >
          submit
        </motion.button>
        <p className="bg-pink-500 px-2 h-8 text-black font-bold">{userName}</p>
      </form>
    </div>
  );
}
