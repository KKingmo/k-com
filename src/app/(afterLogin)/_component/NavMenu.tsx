"use client";

import Link from "next/link";
import style from "@/app/(afterLogin)/layout.module.css";
import { useSelectedLayoutSegment } from "next/navigation";
import HomeOn from "@/app/_component/icons/home-on";
import Home from "@/app/_component/icons/home";
import ExploreOn from "@/app/_component/icons/explore-on";
import Explore from "@/app/_component/icons/explore";
import Messages from "@/app/_component/icons/messages";
import MessagesOn from "@/app/_component/icons/messages-on";
import ProfileOn from "@/app/_component/icons/profile-on";
import Profile from "@/app/_component/icons/profile";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const me = { id: "kkingmo", nickname: "Kingmo", image: "/kingmoFace.png" };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={style.navPill}>
            {segment === "home" ? (
              <>
                <HomeOn fill="#000" />
                <div style={{ fontWeight: "bold" }}>홈</div>
              </>
            ) : (
              <>
                <Home fill="#000" />
                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={style.navPill}>
            {segment && ["search", "explore"].includes(segment) ? (
              <>
                <ExploreOn fill="#000" />
                <div style={{ fontWeight: "bold" }}>탐색하기</div>
              </>
            ) : (
              <>
                <Explore fill="#000" />
                <div>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={style.navPill}>
            {segment === "messages" ? (
              <>
                <MessagesOn fill="#000" />
                <div style={{ fontWeight: "bold" }}>쪽지</div>
              </>
            ) : (
              <>
                <Messages fill="#000" />
                <div>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>
            <div className={style.navPill}>
              {segment === me.id ? (
                <>
                  <ProfileOn fill="#000" />
                  <div style={{ fontWeight: "bold" }}>프로필</div>
                </>
              ) : (
                <>
                  <Profile fill="#000" />
                  <div>프로필</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
