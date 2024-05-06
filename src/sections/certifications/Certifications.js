import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Animation, Section} from "gatsby-theme-portfolio-minimal";
import "./certifications.scss"

export function Certifications() {
    return (
        <Animation type="fadeIn">
            <Section heading="Certifications" anchor="">
                <div className="certifications-grid">
                    <a href="https://www.credly.com/badges/c02245cd-bbed-43d6-907f-21cfc8c4e449/public_url"
                       target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <StaticImage
                            src="../../cert/AWSSecurity.png"
                            alt="AWS Security Logo"
                        />
                    </a>
                    <a href="https://www.youracclaim.com/badges/c7eff3aa-dd57-4f86-82b2-50654fff5bc4/linked_in_profile"
                       target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <StaticImage
                            src="../../cert/SecurityPlus.png"
                            alt="CompTIA Security+ Logo"
                        />
                    </a>
                </div>
            </Section>
        </Animation>
    );
}