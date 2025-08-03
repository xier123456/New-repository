
import React from 'react'
import { Link } from 'react-router-dom'
import { SiTiktok } from "react-icons/si";
import { FaBilibili } from "react-icons/fa6";
import { SiKuaishou } from "react-icons/si";

const Footer = () => {
  return (
    <div><footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link className="link link-hover" to='/about'>关于我</Link>
    <Link className="link link-hover" to='/Article'>笔记</Link>
    <Link className="link link-hover" to='/friend'>好友</Link>
    <Link className="link link-hover" to='/Miscellaneous'>说说</Link>
    <Link className="link link-hover" to='/Technology'>发展图</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 justify-center ">
      <a>
        <SiTiktok  className="btn hover:btn-neutral hover:text-white fill-current text-4xl  p-2" />
      </a>
      <a>
          <FaBilibili    className="fill-current text-3xl p-2 btn btn-soft btn-secondary"/>
       
      </a>
      <a>
       
       <SiKuaishou   className="fill-current text-3xl btn btn-soft btn-error p-2 hover:text-white"/>
      </a>
    </div>
  </nav>
  <aside>
    <p> © {new Date().getFullYear()}我的个人博客</p>
  </aside>
</footer></div>
  )
}

export default Footer