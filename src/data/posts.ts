import { PostType } from '@/types';

export const posts: PostType[] = [
  {
    id: 1,
    title: 'Web Development - The Next Big Thing',
    category: 'Web Development',
    tags: ['HTML', 'JavaScript'],
    publishedAt: '7 April 2023',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Varsha',
    comments: [
      {
        id: 1,
        name: 'Jane Cooper',
        email: 'jane@example.com',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        commentedAt: '2022-08-21T12:00:00.000Z',
      },
      {
        id: 2,
        name: 'Tom Cook',
        email: 'tom@example.com',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        commentedAt: '2022-08-21T12:05:03.000Z',
      },
      {
        id: 3,
        name: 'Brendan Lim',
        email: 'brendan@example.com',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        commentedAt: '2022-10-21T12:10:00.000Z',
      },
    ],
    isLiked: false,
    content: `
    <p>
    Web development continues to evolve with remarkable trends poised to shape the next phase. Progressive Web Apps (PWAs) offer seamless user experiences, combining the best of web and mobile apps. Serverless architecture eliminates infrastructure management, enabling developers to focus solely on code. WebAssembly accelerates performance by running near-native code in browsers. Voice and gesture-based interfaces, powered by AI, usher in more intuitive interactions. The rise of low-code/no-code platforms democratizes development, allowing non-developers to create functional applications. The metaverse and spatial computing are emerging, intertwining the virtual and physical worlds. Blockchain integration enhances security and transparency. As web accessibility gains prominence, inclusive design principles are being integrated from the outset. In conclusion, the convergence of technologies and user-centric approaches promises a future of dynamic, inclusive, and immersive web experiences.
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
            Web development's evolution into the next era encompasses diverse trends reshaping digital landscapes. Progressive Web Apps (PWAs) ensure offline access and swift loading, mimicking native app experiences. Headless CMS architecture decouples content management, providing flexibility to developers. WebAssembly, now supporting complex applications, heightens performance and interactivity. Conversational AI and chatbots personalize user interactions, enhancing engagement and support. Edge computing optimizes data processing by reducing latency, critical for real-time applications. Cybersecurity remains pivotal, prompting integration of advanced authentication methods and encryption standards. The web's evolution is intrinsically tied to the Internet of Things (IoT), connecting devices and services seamlessly. Inclusive design prioritizes accessibility, making digital experiences available to everyone. As quantum computing matures, it holds potential to revolutionize data processing capabilities. The future of web development embraces innovation, accessibility, and adaptability, shaping a digital realm that's sophisticated, interconnected, and user-centric.
            </p>`,
  },
  {
    id: 2,
    title: 'Artificial Intelligence in Medicine',
    category: 'Artificial Intelligence',
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'William Doe',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
            Web development's evolution into the next era encompasses diverse trends reshaping digital landscapes. 
            Progressive Web Apps (PWAs) ensure offline access and swift loading, mimicking native app experiences.
             Headless CMS architecture decouples content management, providing flexibility to developers.
             WebAssembly, now supporting complex applications, heightens performance and interactivity. 
             Conversational AI and chatbots personalize user interactions, enhancing engagement and support. 
             Edge computing optimizes data processing by reducing latency, critical for real-time applications. 
             Cybersecurity remains pivotal, prompting integration of advanced authentication methods and encryption standards. 
             The web's evolution is intrinsically tied to the Internet of Things (IoT), connecting devices and services seamlessly. Inclusive design prioritizes accessibility, making digital experiences available to everyone. As quantum computing matures, it holds potential to revolutionize data processing capabilities. The future of web development embraces innovation, accessibility, and adaptability, shaping a digital realm that's sophisticated, interconnected, and user-centric.
            </p>`,
  },
  {
    id: 3,
    title: 'UI/UX Design Starter with Figma',
    category: 'UI/UX Design',
    tags: ['UI', 'UX', 'Design', 'Figma', 'Sketch', 'Adobe XD', 'Web Design', 'Product Design', 'Branding'],
    publishedAt: '15 Feb 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'Jane Cooper',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 4,
    title: 'Android Development with Kotlin vs Java',
    category: 'Mobile Development',
    tags: ['Android', 'Java', 'Kotlin'],
    publishedAt: '10 Jan 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-4.png',
    imageUrl: '/images/posts/post-04.png',
    authorName: 'Diana Lim',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 5,
    title: 'React with TypeScript for Beginners',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'TypeScript'],
    publishedAt: '01 Jan 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-5.png',
    imageUrl: '/images/posts/post-05.png',
    authorName: 'Dan Wilson',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 6,
    title: 'How to Build a Next.js Blog with MDX',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'MDX'],
    publishedAt: '28 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-6.png',
    imageUrl: '/images/posts/post-06.png',
    authorName: 'Patrick Cooper',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 7,
    title: 'How to Get More Traffic From Google',
    category: 'Digital Marketing',
    tags: ['SEO', 'Marketing', 'Digital', 'Branding'],
    publishedAt: '21 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Linda Jackson',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 8,
    title: 'Frontend Engineering tips that increase your productivity',
    category: 'Web Development',
    tags: ['Productivity', 'Frontend', 'React', 'JavaScript', 'TypeScript'],
    publishedAt: '20 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Steve Smith',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 9,
    title: 'How artificial intelligence will change your life',
    category: 'Artificial Intelligence',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Technology', 'AI'],
    publishedAt: '11 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'Floyd Miles',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 10,
    title: 'Increase your brand awareness with Social Media Marketing',
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'Social Media', 'Marketing', 'Branding', 'SEO'],
    publishedAt: '10 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-4.png',
    imageUrl: '/images/posts/post-04.png',
    authorName: 'James Logan',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 11,
    title: 'How to design a landing page using Figma',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Design', 'Web Design', 'Figma', 'Sketch', 'Branding', 'Product Design'],
    publishedAt: '9 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-5.png',
    imageUrl: '/images/posts/post-05.png',
    authorName: 'Tommy Barnes',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 12,
    title: "Flutter vs React Native: What's the best choice in 2022?",
    category: 'Mobile Development',
    tags: ['Mobile Development', 'Flutter', 'React Native', 'Dart', 'JavaScript', 'TypeScript'],
    publishedAt: '8 Dec 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-6.png',
    imageUrl: '/images/posts/post-06.png',
    authorName: 'Claire Robertson',
    comments: [],
    isLiked: false,
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
];
