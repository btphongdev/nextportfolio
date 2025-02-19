'use client'

import Brain from '@/components/brain'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })
  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })
  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  const scrollToElement = () => {
    const { current } = skillRef
    if (current !== null) {
      current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* BIOGRAPHY COTAINER*/}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE  */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/* BIOGRAPHY DECS  */}
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ad est ut minima ratione temporibus doloremque adipisci itaque
              obcaecati illum, aliquam, similique nesciunt nam quasi delectus
              officiis eligendi corrupti quidem!
            </p>
            {/* BIOGRAPHY QUOTE  */}
            <span className='italic'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN  */}
            <div className='self-end'>
              <svg
                width='265'
                height='43'
                viewBox='0 0 265 43'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_b_2_2)'>
                  <path
                    d='M0.0681819 33L5.50142 0.272726H15.7287C17.5611 0.272726 19.0739 0.608309 20.267 1.27947C21.4709 1.93998 22.3125 2.89346 22.7919 4.13991C23.282 5.37571 23.3778 6.85653 23.0795 8.58239C22.8665 9.8608 22.4776 11.0327 21.913 12.098C21.3484 13.1634 20.6346 14.0636 19.7717 14.7987C18.9087 15.5337 17.9233 16.0398 16.8153 16.3168V16.4446C17.9872 16.5511 18.9886 16.9666 19.8196 17.6911C20.6506 18.4155 21.2418 19.3743 21.5934 20.5675C21.945 21.7607 21.9929 23.1136 21.7372 24.6264C21.4602 26.3097 20.8583 27.7798 19.9315 29.0369C19.0153 30.294 17.8274 31.2688 16.3679 31.9613C14.919 32.6538 13.2571 33 11.3821 33H0.0681819ZM1.28267 31.9773H11.5739C13.9709 31.9773 15.995 31.3061 17.6463 29.9638C19.3082 28.6108 20.331 26.8317 20.7145 24.6264C20.9702 23.1136 20.853 21.7766 20.3629 20.6154C19.8729 19.4542 19.0845 18.5433 17.9979 17.8828C16.9112 17.2223 15.6009 16.892 14.0668 16.892H3.77557L1.28267 31.9773ZM3.96733 15.8693H14.2585C15.7287 15.8693 17.0071 15.5337 18.0938 14.8626C19.1804 14.1914 20.0593 13.3018 20.7305 12.1939C21.4016 11.0859 21.8438 9.8821 22.0568 8.58239C22.4403 6.24929 22.0462 4.45419 20.8743 3.19709C19.7131 1.92933 17.9339 1.29545 15.5369 1.29545H6.33239L3.96733 15.8693ZM39.8906 8.45454L39.6989 9.47727H29.983L30.1747 8.45454H39.8906ZM34.7131 2.57386H35.7358L31.581 27.8224C31.4105 28.7812 31.4798 29.6069 31.7887 30.2994C32.0977 30.9812 32.5717 31.5085 33.2109 31.8814C33.8501 32.2436 34.5852 32.4247 35.4162 32.4247C35.7038 32.4247 35.9808 32.3981 36.2472 32.3448C36.5241 32.2809 36.8224 32.201 37.142 32.1051L37.2699 33.0639C36.9183 33.1918 36.5827 33.2876 36.2631 33.3516C35.9542 33.4155 35.608 33.4474 35.2244 33.4474C34.223 33.4474 33.3335 33.2184 32.5558 32.7603C31.7887 32.3022 31.2134 31.6523 30.8299 30.8107C30.457 29.9691 30.3665 28.973 30.5582 27.8224L34.7131 2.57386ZM42.2717 42.2045L47.8967 8.45454H48.9194L47.8967 14.7188H48.0245C48.685 13.3551 49.4893 12.1779 50.4375 11.1871C51.3963 10.1857 52.467 9.41868 53.6495 8.88601C54.8427 8.34268 56.0998 8.07102 57.4208 8.07102C59.3597 8.07102 60.9418 8.625 62.1669 9.73295C63.4027 10.8409 64.2443 12.3537 64.6918 14.2713C65.1499 16.1889 65.1765 18.3622 64.7717 20.7912C64.3668 23.1989 63.6104 25.3615 62.5025 27.2791C61.4052 29.1967 60.0575 30.7148 58.4595 31.8335C56.8722 32.9521 55.1197 33.5114 53.2021 33.5114C51.9023 33.5114 50.7464 33.245 49.7344 32.7124C48.7223 32.169 47.8967 31.402 47.2575 30.4112C46.6183 29.4098 46.1921 28.2273 45.979 26.8636H45.8512L43.2944 42.2045H42.2717ZM46.8739 20.7912C46.5117 23.0071 46.5117 24.9993 46.8739 26.7678C47.2362 28.5256 47.9499 29.9212 49.0153 30.9545C50.0806 31.9773 51.4762 32.4886 53.2021 32.4886C54.9279 32.4886 56.5206 31.9773 57.9801 30.9545C59.4396 29.9212 60.6754 28.5256 61.6875 26.7678C62.6996 24.9993 63.3867 23.0071 63.7489 20.7912C64.1112 18.5753 64.1112 16.5884 63.7489 14.8306C63.3867 13.0621 62.6783 11.6665 61.6236 10.6438C60.5689 9.61044 59.168 9.09375 57.4208 9.09375C55.695 9.09375 54.0969 9.61044 52.6268 10.6438C51.1566 11.6665 49.9208 13.0621 48.9194 14.8306C47.918 16.5884 47.2362 18.5753 46.8739 20.7912ZM73.7365 16.5085L70.9879 33H69.9652L75.3984 0.272726H76.4212L74.4396 12.3537H74.5675C75.3345 11.0753 76.4425 10.0526 77.8913 9.28551C79.3509 8.51847 80.9276 8.13494 82.6214 8.13494C84.2621 8.13494 85.6523 8.49183 86.7923 9.20561C87.9322 9.91939 88.7525 10.9048 89.2532 12.1619C89.7539 13.419 89.8658 14.8679 89.5888 16.5085L86.8402 33H85.8175L88.5661 16.5085C88.9176 14.3352 88.5447 12.5668 87.4474 11.2031C86.3608 9.83949 84.7308 9.15767 82.5575 9.15767C81.1087 9.15767 79.7557 9.47195 78.4986 10.1005C77.2521 10.729 76.2028 11.5973 75.3505 12.7053C74.5089 13.8132 73.9709 15.081 73.7365 16.5085ZM104.235 33.5114C102.296 33.5114 100.644 32.9521 99.2807 31.8335C97.9277 30.7148 96.9583 29.1861 96.3723 27.2472C95.7971 25.3082 95.7118 23.1136 96.1167 20.6634C96.5215 18.277 97.3205 16.1357 98.5137 14.2393C99.7175 12.3324 101.166 10.8303 102.86 9.73295C104.565 8.625 106.365 8.07102 108.262 8.07102C110.222 8.07102 111.878 8.63565 113.231 9.76491C114.595 10.8942 115.564 12.4283 116.14 14.3672C116.726 16.3061 116.827 18.4901 116.443 20.919C116.039 23.3054 115.234 25.4521 114.03 27.359C112.827 29.2553 111.372 30.7575 109.668 31.8654C107.963 32.9627 106.152 33.5114 104.235 33.5114ZM104.235 32.4886C106.003 32.4886 107.67 31.9773 109.236 30.9545C110.802 29.9212 112.134 28.5149 113.231 26.7358C114.329 24.946 115.058 22.9219 115.421 20.6634C115.783 18.4687 115.714 16.4979 115.213 14.7507C114.712 13.0036 113.865 11.6239 112.672 10.6119C111.479 9.59979 110.03 9.09375 108.325 9.09375C106.578 9.09375 104.922 9.61577 103.356 10.6598C101.79 11.6932 100.453 13.1048 99.3446 14.8945C98.2367 16.6737 97.5016 18.6818 97.1394 20.919C96.7559 23.1136 96.8145 25.0845 97.3152 26.8317C97.8265 28.5788 98.6788 29.9585 99.872 30.9705C101.076 31.9826 102.53 32.4886 104.235 32.4886ZM125.372 16.5085L122.624 33H121.601L125.692 8.45454H126.715L126.075 12.3537H126.203C126.97 11.0753 128.078 10.0526 129.527 9.28551C130.987 8.51847 132.563 8.13494 134.257 8.13494C135.898 8.13494 137.288 8.49183 138.428 9.20561C139.568 9.91939 140.388 10.9048 140.889 12.1619C141.39 13.419 141.502 14.8679 141.225 16.5085L138.476 33H137.453L140.202 16.5085C140.553 14.3352 140.18 12.5668 139.083 11.2031C137.997 9.83949 136.367 9.15767 134.193 9.15767C132.744 9.15767 131.391 9.47195 130.134 10.1005C128.888 10.729 127.839 11.5973 126.986 12.7053C126.145 13.8132 125.607 15.081 125.372 16.5085ZM153.953 42.7159C152.589 42.7159 151.353 42.5295 150.245 42.1566C149.137 41.7944 148.216 41.2457 147.481 40.5107C146.746 39.7862 146.261 38.8807 146.027 37.794L146.985 37.4744C147.198 38.4332 147.619 39.2216 148.248 39.8395C148.876 40.468 149.675 40.9315 150.645 41.2298C151.614 41.5387 152.717 41.6932 153.953 41.6932C156.509 41.6932 158.635 41.0167 160.329 39.6637C162.023 38.3107 163.093 36.2599 163.541 33.5114L164.627 26.8636H164.5C163.86 28.2273 163.04 29.3672 162.039 30.2834C161.048 31.1889 159.956 31.8707 158.763 32.3288C157.58 32.7763 156.382 33 155.167 33C153.25 33 151.668 32.4833 150.421 31.4499C149.175 30.4165 148.317 28.9837 147.848 27.1513C147.38 25.3189 147.348 23.1989 147.752 20.7912C148.157 18.3622 148.903 16.1889 149.99 14.2713C151.076 12.3537 152.419 10.8409 154.017 9.73295C155.615 8.625 157.383 8.07102 159.322 8.07102C160.643 8.07102 161.799 8.34268 162.79 8.88601C163.791 9.41868 164.606 10.1857 165.235 11.1871C165.874 12.1779 166.311 13.3551 166.545 14.7188H166.673L167.696 8.45454H168.718L164.563 33.5114C164.223 35.5355 163.578 37.2294 162.63 38.593C161.682 39.9567 160.473 40.9847 159.002 41.6772C157.532 42.3697 155.849 42.7159 153.953 42.7159ZM155.167 31.9773C156.872 31.9773 158.443 31.5245 159.881 30.619C161.33 29.7134 162.555 28.4244 163.557 26.7518C164.569 25.0792 165.267 23.0923 165.65 20.7912C166.012 18.5753 166.007 16.5884 165.634 14.8306C165.272 13.0621 164.553 11.6665 163.477 10.6438C162.411 9.61044 161.005 9.09375 159.258 9.09375C157.532 9.09375 155.94 9.61044 154.48 10.6438C153.031 11.6665 151.806 13.0621 150.805 14.8306C149.814 16.5884 149.137 18.5753 148.775 20.7912C148.413 23.0071 148.418 24.9567 148.791 26.6399C149.175 28.3125 149.899 29.6229 150.964 30.571C152.04 31.5085 153.441 31.9773 155.167 31.9773ZM195.445 33H186.88L192.313 0.272726H201.709C204.714 0.272726 207.185 0.922584 209.124 2.2223C211.063 3.51136 212.405 5.37038 213.151 7.79936C213.897 10.2177 213.982 13.1207 213.407 16.5085C212.81 19.9815 211.702 22.9485 210.083 25.4094C208.474 27.8704 206.429 29.7507 203.946 31.0504C201.475 32.3501 198.641 33 195.445 33ZM188.078 31.9773H195.637C198.609 31.9773 201.256 31.3487 203.579 30.0916C205.912 28.8345 207.835 27.0501 209.348 24.7383C210.861 22.4265 211.873 19.6832 212.384 16.5085C212.906 13.2699 212.842 10.5213 212.192 8.26278C211.542 5.99361 210.323 4.26776 208.533 3.08523C206.754 1.89204 204.415 1.29545 201.517 1.29545H193.16L188.078 31.9773ZM227.421 33.5114C225.269 33.5114 223.485 32.9521 222.068 31.8335C220.651 30.7148 219.66 29.1967 219.096 27.2791C218.531 25.3615 218.451 23.1989 218.856 20.7912C219.261 18.3835 220.065 16.2209 221.269 14.3033C222.473 12.3857 223.932 10.8675 225.647 9.74893C227.363 8.63033 229.19 8.07102 231.129 8.07102C232.556 8.07102 233.824 8.37997 234.932 8.99787C236.051 9.60511 236.972 10.4467 237.696 11.5227C238.432 12.5881 238.938 13.8239 239.215 15.2301C239.492 16.6257 239.502 18.1172 239.247 19.7045L239.055 20.7273H219.367L219.559 19.7045H238.224C238.543 17.7443 238.442 15.9652 237.92 14.3672C237.409 12.7585 236.562 11.4801 235.379 10.532C234.207 9.57315 232.791 9.09375 231.129 9.09375C229.445 9.09375 227.826 9.59446 226.271 10.5959C224.715 11.5973 223.373 12.9609 222.244 14.6868C221.114 16.4126 220.347 18.3622 219.943 20.5355L219.879 20.5994C219.516 22.7514 219.554 24.7276 219.991 26.5281C220.427 28.3285 221.269 29.772 222.515 30.8587C223.762 31.9453 225.418 32.4886 227.485 32.4886C228.977 32.4886 230.287 32.2223 231.416 31.6896C232.556 31.157 233.504 30.5444 234.261 29.8519C235.028 29.1594 235.603 28.5682 235.987 28.0781L236.69 28.6534C236.242 29.2713 235.598 29.9585 234.756 30.7148C233.915 31.4712 232.881 32.1264 231.656 32.6804C230.431 33.2344 229.019 33.5114 227.421 33.5114ZM264.471 8.45454L251.623 33H250.217L245.551 8.45454H246.573L251.016 31.7216H251.144L263.321 8.45454H264.471Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_b_2_2'
                    x='-3.93182'
                    y='-3.72727'
                    width='272.403'
                    height='50.4432'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feGaussianBlur in='BackgroundImageFix' stdDeviation='2' />
                    <feComposite
                      in2='SourceAlpha'
                      operator='in'
                      result='effect1_backgroundBlur_2_2'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_backgroundBlur_2_2'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* BIOGRAPHY SGV SCROLL */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={50}
                height={50}
                onClick={() => scrollToElement()}
              >
                <path
                  d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
                <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
                <path
                  d='M15 11L12 14L9 11'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
              </motion.svg>
            </div>
          </div>

          {/* SKILLS */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILLS TITLE  */}

            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                TypeScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NodeJs
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                ReactJs
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NextJs
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind Css
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                SQL
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Java
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            {/* <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={50}
                height={50}
              >
                <path
                  d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
                <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
                <path
                  d='M15 11L12 14L9 11'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
              </motion.svg>
            </div> */}
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className='flex flex-col gap-12 justify-center pb-48'
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE  */}
            <motion.h1
              initial={{ x: '-400px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-400px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE ITEM 1*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Front-end Developer
                  </div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    10/2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    CUSC
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>

              {/* EXPERIENCE ITEM 2*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'></div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Hardware And Computer Network Intern
                  </div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>
                    Design and installation of internal networks
                    <br />
                    Repair The Computer
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    05/2022 - 09/2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Huy Minh Pro
                  </div>
                </div>
              </div>
              {/* EXPERIENCE ITEM 3*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    IT Student
                  </div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>
                    Studying information technology
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    09/2018 - 09/2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Can Tho University
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
