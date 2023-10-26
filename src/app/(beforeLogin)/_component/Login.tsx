import KLogo from "@/app/_component/icons/kLogo";
import Link from "next/link";
import style from "./login.module.css";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <KLogo
          viewBox={"0 0 73 82"}
          width={300}
          height={300}
          fill={"#000"}
          strokeWidth={0}
        />
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={style.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={style.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
