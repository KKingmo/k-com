import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>에프터 로그인</div>
      {children}
    </div>
  );
}
