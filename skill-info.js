document.addEventListener('DOMContentLoaded', () => {
    const skillIcons = document.querySelectorAll('.skill-icon');
    let infoBox = null;
    let hideTimeout = null;

    // Creates the general template for each icon in skillIcons
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }

            const img = e.currentTarget.querySelector('img');
            if (!img) return;
            
            const skillName = img.alt;
            const { description, bulletPoints } = getSkillInfo(skillName);
            
            if (infoBox) {
                infoBox.remove();
            }
            
            infoBox = document.createElement('div');
            infoBox.className = 'skill-info-box';
            infoBox.innerHTML = `
                <h3>${skillName}</h3>
                <p>${description}</p>
                <p>Projects I've used this on:</p>
                <ul>
                    ${bulletPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
            
            document.body.appendChild(infoBox);
            positionInfoBox(e, infoBox);
        });

        // Event listener to make the info box follow the cursor, calling positionInfoBox()
        icon.addEventListener('mousemove', (e) => {
            if (infoBox) {
                positionInfoBox(e, infoBox);
            }
        });

        // Event listener to make the info box leave when the mouse leaves
        icon.addEventListener('mouseleave', () => {
            if (infoBox) {
                infoBox.style.opacity = '0';
                hideTimeout = setTimeout(() => {
                    if (infoBox) {
                        infoBox.remove();
                        infoBox = null;
                    }
                }, 300);
            }
        });
    });

    // Helper function to make the info box follow the cursor
    function positionInfoBox(e, box) {
        const x = e.clientX + 10;
        const y = e.clientY + 10;
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
    }

    // Helper function to get specific description and bullet points for each skill
    function getSkillInfo(skillName) {
        const skillInfo = {
            // 1: Frameworks
            'Java': {
                description: 'A versatile, object-oriented programming language.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'Python': {
                description: 'A high-level, versatile programming language for many purposes.',
                bulletPoints: ['Syncify', 'BloodLink']
            },
            'C': {
                description: 'A low-level, procedural computer programming language.',
                bulletPoints: ['C and Software Tools (Course)', 'Operating Systems (Course)']
            },
            'JavaScript': {
                description: 'A dynamic scripting/programming language for web development.',
                bulletPoints: ['FlashCode', 'Movia', 'Syncify', 'CoffeeMaker']
            },
            'TypeScript': {
                description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
                bulletPoints: ['Movia']
            },

            // 2: Frontend
            'ReactJS': {
                description: 'A JavaScript library for building user interfaces.',
                bulletPoints: ['Movia']
            },
            'Bootstrap': {
                description: 'A CSS framework for responsive web design.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'AngularJS': {
                description: 'A JavaScript framework for dynamic web applications.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'HTML': {
                description: 'A markup language for structuring web content.',
                bulletPoints: ['FlashCode', 'Movia', 'Syncify', 'CoffeeMaker', 'BloodLink']
            },
            'CSS': {
                description: 'A stylesheet language for better web page presentation.',
                bulletPoints: ['FlashCode', 'Movia', 'Syncify', 'CoffeeMaker', 'BloodLink']
            },

            // 3: Backend
            'Node.js': {
                description: 'A JavaScript runtime environment for server-side programming.',
                bulletPoints: ['Movia']
            },
            'Express.js': {
                description: 'A web application framework for Node.js.',
                bulletPoints: ['Movia']
            },
            'Spring Boot': {
                description: 'A Java-based framework for microservices development.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'Flask': {
                description: 'A lightweight Python web application framework.',
                bulletPoints: ['Syncify', 'BloodLink']
            },
            'Spring Security': {
                description: 'An authentication and access-control framework for Java.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },

            // 4: Database Tools
            'MySQL': {
                description: 'An open-source relational database management system.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'PostgreSQL': {
                description: 'An advanced open-source relational database system.',
                bulletPoints: ['Movia']
            },
            'SQLite': {
                description: 'A lightweight, serverless relational database engine.',
                bulletPoints: ['BloodLink', 'Weekly Project News (Internship)']
            },
            'Hibernate': {
                description: 'An object-relational mapping tool for Java.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            },
            'Prisma': {
                description: 'A modern database toolkit for Node.js.',
                bulletPoints: ['Movia']
            },

            // 5: Software Tools
            'Postman': {
                description: 'An API development and testing tool.',
                bulletPoints: ['FlashCode', 'Movia', 'BloodLink']
            },
            'Jenkins': {
                description: 'An open-source automation server for CI/CD and testing.',
                bulletPoints: ['CoffeeMaker']
            },
            'GitHub': {
                description: 'A popular web-based platform for version control.',
                bulletPoints: ['FlashCode', 'Movia', 'Syncify', 'CoffeeMaker', 'BloodLink']
            },
            'VS Code': {
                description: 'A lightweight, extensible code editor.',
                bulletPoints: ['Movia', 'Syncify', 'BloodLink']
            },
            'Eclipse': {
                description: 'An integrated development environment for Java.',
                bulletPoints: ['FlashCode', 'CoffeeMaker']
            }

        };
        
        // Catch all if the skill doesn't exist (if I wrote something wrong)
        return skillInfo[skillName] || {
            description: 'A software tool/technology.',
            bulletPoints: ['Love', 'Compassion']
        };
    }
});