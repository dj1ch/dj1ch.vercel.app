import { forwardRef } from "react";
import type { SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns" | "children"> & { d: string; size?: number };

const Base = forwardRef<SVGSVGElement, BaseProps>(({ d, size = 16, width = size, height = size, ...props }, ref) => (
  <svg
    ref={ref}
    fill="currentColor"
    {...props}
    width={width}
    height={height}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} />
  </svg>
));

type IconProps = Omit<BaseProps, "d">;

const create = (d: string) => forwardRef<SVGSVGElement, IconProps>((props, ref) => <Base ref={ref} d={d} {...props} />);

/**
 * How to add icons ?
 *
 * - Go to https://simpleicons.org
 *
 * - Copy the icon as SVG, example:
 *    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 *      <title>GitHub</title>
 *      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
 *    </svg>
 *
 * - create component with `create` function then copy paste `d` path property value, example:
 *    export const IconGitHub = create("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12");
 */

// TODO : update icons

export const IconArc = create(
  "M23.9371 8.5089c.1471-.7147.0367-1.4661-.3364-2.0967-.4203-.7094-1.1035-1.1876-1.9075-1.3506a2.9178 2.9178 0 0 0-.5623-.0578h-.0105c-1.3768 0-2.5329.988-2.8061 2.3385-.1629.7935-.4782 1.5607-.9196 2.2701a.263.263 0 0 1-.2363.1205.2627.2627 0 0 1-.2209-.1468l-2.8587-5.9906c-.3626-.762-1.0142-1.361-1.8235-1.5975-1.3873-.4099-2.8166.2838-3.4052 1.524L5.897 9.7333c-.0788.1629-.31.1576-.3784-.0053v-.0052a2.8597 2.8597 0 0 0-2.6642-1.7972c-.3784 0-.7515.0736-1.1088.2207-1.4714.6148-2.1283 2.349-1.5187 3.8203.557 1.3295 1.4714 2.5855 2.659 3.668.084.0788.1103.1997.063.3048l-.9563 2.0074c-.6727 1.4188-.1314 3.1477 1.2664 3.8571.4099.2049.846.31 1.298.31 1.1035 0 2.123-.6411 2.5959-1.6395l.825-1.7289a.254.254 0 0 1 .3048-.1366c1.0037.2732 2.0127.4204 3.0058.4204 1.1193 0 2.2229-.1682 3.2896-.4782a.2626.2626 0 0 1 .3101.1366l.8145 1.7131c.4834 1.0195 1.4924 1.7131 2.6169 1.7184.4572 0 .8986-.0999 1.3138-.3101 1.403-.7094 1.939-2.4435 1.2664-3.8676L19.875 15.787c-.0473-.1051-.0263-.226.0578-.3048 1.9864-1.8497 3.4525-4.2723 4.0043-6.9733ZM6.2121 20.0172a1.835 1.835 0 0 1-.6764.7622 1.8352 1.8352 0 0 1-.9788.2835c-.2733 0-.5518-.063-.8093-.1891-.9038-.4467-1.2454-1.5713-.8093-2.4804l.7935-1.6658c.0684-.1471.2575-.1997.3837-.1051.1681.1209.3415.2365.5202.3521.6989.4467 1.4293.825 2.1808 1.1351.1419.0578.205.2154.1419.352l-.7462 1.5555Zm5.0763-2.0442c-4.2092 0-8.6548-2.8534-10.1262-6.4951a1.8286 1.8286 0 0 1 1.009-2.3805c.2259-.0893.4571-.1366.683-.1366.7252 0 1.4084.431 1.6974 1.1456.9196 2.2806 4.0043 4.2092 6.7368 4.2092.4204 0 .8408-.042 1.256-.1156a.2643.2643 0 0 1 .2837.1419l1.3768 2.9007c.0683.1471-.0105.3205-.1629.3626-.8986.2365-1.8182.3678-2.7536.3678Zm-.599-4.9291.6358-1.3348c.0526-.1051.205-.1051.2575 0l.6201 1.3033c.042.0841-.0158.1891-.1051.2049-.268.0368-.536.0578-.7988.0578a5.0634 5.0634 0 0 1-.4887-.0263c-.1103-.0157-.1629-.1208-.1208-.2049Zm8.4604 7.8246a1.831 1.831 0 0 1-2.0329-.2788 1.8292 1.8292 0 0 1-.4316-.5778l-4.987-10.4836c-.0998-.2102-.3994-.2102-.4939 0l-1.545 3.2529a.2623.2623 0 0 1-.3205.1366c-1.051-.3626-2.0495-.9774-2.7904-1.7184a.2552.2552 0 0 1-.0473-.2943l3.3421-7.031c.1156-.247.2943-.4677.5203-.6201 1.051-.6884 2.2806-.2575 2.7378.7041l6.8577 14.4248c.4309.9144.0946 2.0389-.8093 2.4856Zm-1.4451-9.6481a.258.258 0 0 1 .0315-.2732c.783-1.0037 1.3558-2.1756 1.6028-3.421.1734-.867.9354-1.4714 1.7919-1.4714.1472 0 .2943.0158.4467.0526.9722.2417 1.5344 1.2507 1.3295 2.2333-.4835 2.3017-1.6816 4.3879-3.3159 6.0222-.1313.1314-.3468.0946-.4256-.0683l-1.4609-3.0742Z"
);

export const IconDribbble = create(
  "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
);

export const IconCalendly = create(
  "M19.655 14.262c.281 0 .557.023.828.064 0 .005-.005.01-.005.014-.105.267-.234.534-.381.786l-1.219 2.106c-1.112 1.936-3.177 3.127-5.411 3.127h-2.432c-2.23 0-4.294-1.191-5.412-3.127l-1.218-2.106a6.251 6.251 0 0 1 0-6.252l1.218-2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c.147.252.271.519.381.786 0 .004.005.009.005.014-.267.041-.543.064-.828.064-1.816 0-2.501-.607-3.291-1.306-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517.791-.703 1.471-1.306 3.287-1.301Zm.005-3.237c.399 0 .794-.036 1.179-.11-.002-.004-.002-.01-.002-.014-.073-.414-.193-.823-.349-1.218.731-.12 1.407-.396 1.986-.819 0-.004-.005-.013-.005-.018-.331-1.085-.832-2.101-1.489-3.03-.649-.915-1.435-1.719-2.331-2.395-1.867-1.398-4.088-2.138-6.428-2.138-1.448 0-2.855.28-4.175.841-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83c-.557 1.324-.842 2.726-.842 4.175 0 1.448.281 2.855.842 4.174.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841 2.34 0 4.561-.74 6.428-2.137a10.815 10.815 0 0 0 2.331-2.396c.652-.929 1.158-1.949 1.489-3.03 0-.004.005-.014.005-.018-.579-.423-1.255-.699-1.986-.819.161-.395.276-.804.349-1.218.005-.009.005-.014.005-.023.869.166 1.692.506 2.404 1.035.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464.106.341.239.915-.446 1.421-.717.529-1.535.873-2.404 1.034.128.716.128 1.45 0 2.166-.387-.074-.782-.11-1.182-.11-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827Z"
);

export const IconFigma = create(
  "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
);

export const IconFramer = create("M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z");

export const IconGitHub = create(
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
);

export const IconNotion = create(
  "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
);

export const IconRive = create(
  "M.643 1.475c0 .814.668 1.475 1.49 1.475H14.49c1.408 0 2.568.43 3.48 1.29.91.861 1.366 1.967 1.366 3.32 0 1.25-.456 2.274-1.367 3.072-.911.78-2.07 1.168-3.479 1.168H9.12c-.824 0-1.491.66-1.491 1.475 0 .815.667 1.475 1.491 1.475h5.93l5.342 8.482c.332.512.797.768 1.398.768.663 0 1.129-.256 1.398-.768.269-.533.217-1.096-.155-1.69l-4.753-7.56c1.284-.574 2.299-1.414 3.044-2.52.746-1.127 1.119-2.427 1.119-3.902 0-1.496-.342-2.807-1.026-3.934-.662-1.127-1.594-2.008-2.795-2.643C17.42.327 16.044 0 14.49 0H2.134C1.311 0 .643.66.643 1.475Z"
);

export const IconX = create(
  "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
);

export const IconYoutube = create(
  "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
);

export const IconInstagram = create(
  "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
);

export const IconDailyDev = create(
  "M18.29 5.706a1.405 1.405 0 0 0-1.987 0L4.716 17.296l1.324-2.65-2.65-2.649 3.312-3.311 2.65 2.65 1.986-1.988-3.642-3.642a1.405 1.405 0 0 0-1.987 0L.411 11.004a1.404 1.404 0 0 0 0 1.987l4.305 4.304.993.993a1.405 1.405 0 0 0 1.987 0L19.285 6.7l-.993-.994Zm-.332 3.647 2.65 2.65-4.306 4.305a1.404 1.404 0 1 0 1.986 1.986l5.299-5.298a1.404 1.404 0 0 0 0-1.987l-4.305-4.304-1.324 2.648Z"
);

export const IconLeetcode = create(
  "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
);

export const IconCodecademy = create(
  "M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 01-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 010 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z"
);
