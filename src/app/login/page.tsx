"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Text } from "@/shared/ui";
import styles from "./login.module.scss";

type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(isLogin ? "Login" : "Register", data);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <Text variant="h2" className={styles.title}>
          {isLogin ? "Sign In" : "Sign Up"}
        </Text>
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {!isLogin && (
            <Input
              {...register("name")}
              placeholder="Full Name"
            />
          )}
          
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
          />
          
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          
          {!isLogin && (
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
            />
          )}
          
          <Button type="submit" className={styles.submitButton}>
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        
        <Button variant="text" onClick={toggleMode} className={styles.toggleButton}>
          {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </Button>
      </div>
    </div>
  );
}