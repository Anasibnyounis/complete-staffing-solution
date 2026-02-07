"use client";

import React from "react";
import Image from "next/image";
import styles from "./Officelocations.module.css";

interface Office {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  tollfree: string;
  fax: string;
}

const OfficeLocations: React.FC = () => {
  const offices: Office[] = Array.from({ length: 10 }, () => ({
    name: "Marlborough Office",
    address: "33 Boston Post Road West",
    city: "Suite 190",
    state: "Marlborough, MA 01752",
    phone: "Phone: (508) 460-6600",
    tollfree: "",
    fax: "Fax: 508-460-6631",
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {offices.map((office, index) => (
            <div key={index} className={styles.card}>
              
              {/* MAP IMAGE */}
              <div className={styles.mapWrapper}>
                <Image
                  src="/contact us/map.png"
                  alt="Map"
                  fill
                  className={styles.mapImage}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.officeName}>{office.name}</h3>

                <p className={styles.address}>
                  {office.address}<br />
                  {office.city}<br />
                  {office.state}
                </p>

                <p className={styles.contact}>
                  {office.phone}<br />
                  {office.fax}
                </p>

                <button className={styles.directionBtn}>
                  Get Directions
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
