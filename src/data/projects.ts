export type ProjectInfo = {
    title: string
    image: string
    imageAlt: string
    subtitle: string
    description: string
    buttons: {
        label: string
        ref: string
        isSource?: boolean
    }[]
    footer: string[]
}
export const projects = [
    {
        "title": "Spend Optimization Grader",
        "image": "/projects/spend-op-preview.jpg",
        "imageAlt": "project screenshot",
        "subtitle": "Interactive Quiz",
        "description": "React quiz that asseses your companies current expense management automation. Fully animated, featuring easter egg interactions to encourage longer engagement. Collaborated on design with internal graphics department. ",
        "buttons": [
            {
                "label": "View live site",
                "ref": "https://spend-op-grader.vercel.app/"
            }

        ],
        "footer": ['React', ' Framer Motion', 'Sass', 'Illustrator']
    },
    {
        "title": "Spend Management Trends Report",
        "image": "/projects/spend-trends-report.png",
        "imageAlt": "project screenshot",
        "subtitle": "Animated Infographic",
        "description": "Based on a static infographic, this interactive version was hand-coded to match the design. Features animated graphs and charts as reusable components. Was intended to become an annual release.",
        "buttons": [
            {
                "label": "View live site",
                "ref": "https://www.emburse.com/insights/2023-spend-management-trends-report"
            }

        ],
        "footer": ['React', 'Framer Motion', 'SVG', 'Sass']
    },
    {
        "title": "Emburse Spend ROI Calculator",
        "image": "/projects/spend-roi.png",
        "imageAlt": "project screenshot",
        "subtitle": "Calculator",
        "description": "Entirely original design based on a manual spreadsheet from the sales team used during the sales process. Highly visible page with strong SEO growth, it currently ranks 15th in Google search for 'ROI Calculator' (2024).",
        "buttons": [
            {
                "label": "View live site",
                "ref": "https://www.emburse.com/products/spend/return-on-investment-calculator"
            }

        ],
        "footer": ['React', 'CSS Animations', 'Sass']
    },
    {
        "title": "SpendSmart Category Insights",
        "image": "/projects/spendsmart-header.png",
        "imageAlt": "project screenshot",
        "subtitle": "Animated Infographic",
        "description": "Interactive infographic with attention grabbing custom animations! Based on a static infographic, I carved out individual vector elements and animated them to create a more engaging experience.",
        "buttons": [
            {
                "label": "View live site",
                "ref": "https://www.emburse.com/learn/spendsmart-2022"
            }

        ],
        "footer": ['anime.js', 'ScrollMagic', 'JavaScript', 'SVG', 'Sass']
    },
    // {
    //     "isDisabled": true,
    //     "title": "Animated Infographic",
    //     "image": "/projects/craziest.png",
    //     "imageAlt": "project screenshot",
    //     "subtitle": "Website",
    //     "description": "Another successful interactive infographic! Handcoded based on static infographic design",
    //     "buttons": [
    //         {
    //             "label": "View live site",
    //             "ref": "https://www.emburse.com/learn/craziest-expenses-2021"
    //         },
    //         {
    //             "label": "Source code",
    //             "ref": "https://github.com/weytools/Craziest-Expenses-2021",
    //             "isSource": true
    //         }

    //     ],
    //     "footer": ['anime.js', 'currency.js', 'JavaScript', 'SVG', 'CSS']
    // },
    // {
    //     "title": "AP Automation ROI Calculator",
    //     "image": "/projects/ap-roi-calc.png",
    //     "imageAlt": "project screenshot",
    //     "subtitle": "Calculator",
    //     "description": "Collaboration with demand gen team to create an engaging form. Captures user data for nurture campaigns and sales funnel",
    //     "buttons": [
    //         {
    //             "label": "View live site",
    //             "ref": "https://www.emburse.com/solutions/ap-roi-calculator"
    //         },
    //         {
    //             "label": "Source code",
    //             "ref": "https://github.com/weytools/ROI-Calculator",
    //             "isSource": true
    //         }

    //     ],
    //     "footer": ['jQuery', 'Marketo', 'CSS']
    // },
    // {
    //     "title": "Cat Simulator",
    //     "image": "images/react-v2-small.png",
    //     "imageAlt": "project screenshot",
    //     "subtitle": "React App",
    //     "description": "Randomly generated cats with depleting needs and button interactions!",
    //     "buttons": [
    //         {
    //             "label": "Launch app",
    //             "ref": "./react.html"
    //         },
    //         {
    //             "label": "Source code",
    //             "ref": "https://github.com/weytools/react-cat-sim",
    //             "isSource": true
    //         }

    //     ],
    //     "footer": ['React', 'JSX', 'API', 'Boostrap', 'Sass']
    // },
    // {
    //     "title": "ROI Calculator",
    //     "image": "/projects/roi-calc.png",
    //     "imageAlt": "project screenshot",
    //     "subtitle": "Website",
    //     "description": "Collaboration with demand gen team to create an engaging form with high fill rates. Captures user data for nurture campaigns and sales funnel",
    //     "buttons": [
    //         {
    //             "label": "View live site",
    //             "ref": "https://www.emburse.com/solutions/roi-calculator"
    //         },
    //         {
    //             "label": "Source code",
    //             "ref": "https://github.com/weytools/ROI-Calculator",
    //             "isSource": true
    //         }

    //     ],
    //     "footer": ['jQuery', 'Marketo', 'API', 'CSS'],
    //     "isDisabled": true
    // },
    {
        "title": "BLITS",
        "image": "/projects/blits-cover.jpg",
        "imageAlt": "project screenshot",
        "subtitle": "Desktop App",
        "description": "Normalized database and GUI, replacing manual paper audit system in a bowling lane manufacturing plant. Includes extra tools and custom calculators.",
        "buttons": [
            {
                "label": "Training Video",
                "ref": "https://youtu.be/7Pq6wX2p1J8",
                "isSource": false
            }

        ],
        "footer": ['WinForms', 'VB', 'SQL', 'WinAPI', 'Batch']
    },
    // {
    //     "title": "Packing Slip Barcoder",
    //     "image": "images/barcoder-black.jpg",
    //     "imageAlt": "project screenshot",
    //     "subtitle": " Desktop App",
    //     "description": "Lightweight utility for barcoding user input into an existing PDF",
    //     "buttons": [
    //         {
    //             "isModal": true,
    //             "modalTarget": "#barcoderModal",
    //             "label": "</i>Image Gallery"
    //         },
    //         {
    //             "label": "Source code",
    //             "ref": "https://github.com/weytools/Lane-Pack-Barcoder",
    //             "isSource": true
    //         }

    //     ],
    //     "footer": ['.NET', 'C#', 'WPF', 'XAML', 'iText Library']
    // },
    // {
    //     "title": "Urban Leaf",
    //     "image": "images/urban-leaf.png",
    //     "imageAlt": "project screenshot",
    //     "subtitle": "Company site",
    //     "description": "Company site with full e-commerce functionality!",
    //     "buttons": [
    //         {
    //             "label": "View live site",
    //             "ref": "https://urbanleafmaine.com/"
    //         },
    //         {
    //             "label": "<i class=\"far fa-times-circle mr-2\"></i>Private source",
    //             "ref": "#",
    //             "isSource": false,
    //             "isDisabled": true
    //         }

    //     ],
    //     "footer": "ShopKeep, Authorize.Net, HTML, CSS",
    //     "isDisabled": true
    // }
]