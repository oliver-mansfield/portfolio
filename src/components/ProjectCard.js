'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function ProjectCard() {
  const imgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const image = imgRef.current;
    const container = containerRef.current;

    const hoverAnimation = gsap.to(image, {
      // rotation: 5,
      duration: 0.1,
      paused: true,
      // scale: 1.5,
      rotationY: 10,
      rotationX: 12,
      rotationZ: -2
      // x: 10,
      // y: 20,
      // z: -100


    });

    container.addEventListener('mouseenter', () => {
      hoverAnimation.play();
    });

    container.addEventListener('mouseleave', () => {
      hoverAnimation.reverse();
    });

    return () => {
      container.removeEventListener('mouseenter', () => {
        hoverAnimation.play();
      });

      container.removeEventListener('mouseleave', () => {
        hoverAnimation.reverse();
      });
    };
  }, []);

  return (
    <Link href="/secondskin" ref={containerRef}>
      <div className="bg-grayLight p-4">
        <div className='perspective'>
          <Image
            src="/images/secondskin-thumb.png"
            alt="Second Skin"
            width={400}
            height={214}
            ref={imgRef}
          />
        </div>
        <h3 className="font-serif text-4xl inline-block h-28 pt-4">Second Skin</h3>
        <p>Headless eCommerce. Design and Build.</p>
        <p className="text-right">View Project</p>
      </div>
    </Link>
  );
}