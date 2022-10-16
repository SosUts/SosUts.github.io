<!--
Add here global page variables to use throughout your website.
-->
+++
author = "Sosuke Utsunomiya"
short_author = "Sosuke"
website_title = "Sosuke@Japan"
website_url   = "https://SosUts.github.io"
website_descr = "Personal website of Sosuke Utsunomiya"
+++

# Add here files or directories that should be ignored by Franklin, otherwise
# these files might be copied and, if markdown, processed by Franklin which
# you might not want. Indicate directories by ending the name with a `/`.
# Base files such as LICENSE.md and README.md are ignored by default.
@def ignore = ["node_modules/"]


# RSS (the website_{title, descr, url} must be defined to get RSS)
@def generate_rss = false

<!-- ---------------------------------------------------
Add here global latex commands to use throughout your
pages. It can be math commands but does not need to be.
----------------------------------------------------- -->
\newcommand{\R}{\mathbb R}
\newcommand{\Q}{\mathbb Q}
\newcommand{\Z}{\mathbb Z}
\newcommand{\N}{\mathbb N}
\newcommand{\space}{\ }
\newcommand{\newline}{ \\ }

<!-- New Command w.r.t Linear Algebra -->
\newcommand{\bra}{\left\langle}
\newcommand{\ket}{\right\rangle}
\newcommand{\norm}[1]{\left\lVert#1\right\rVert}
\newcommand{\Mat}{\mathop{\mathrm{Mat}}}
\newcommand{\diag}{\mathop{\mathrm{diag}}}
\newcommand{\rank}{\mathop{\mathrm{rank}}}
\newcommand{\Ker}{\mathop{\mathrm{Ker}}}
<!-- Put a box around something and pass some css styling to the box
(useful for images for instance) e.g. :
\style{width:80%;}{![](path/to/img.png)} -->
\newcommand{\style}[2]{~~~<div style="!#1;margin-left:auto;margin-right:auto;">~~~!#2~~~</div>~~~}
\newenvironment{mermaid}{~~~ <div style="text-align:center" class="mermaid">~~~}{~~~</div>~~~}

<!-- define document counter enumerated by utils.jl -->

\newcommand{\chapter}[1]{
# #1
\setlevel{chapter} \increment{}
\setlevel{subsection} \resetcount{} <!-- reset subsection -->
\setlevel{section} \resetcount{}    <!-- reset section -->
\setlevel{subsection}
}
\newcommand{\section}[1]{
## #1

\setlevel{section} \increment{}     <!-- increment section -->
\setlevel{subsection} \resetcount{} <!-- reset subsection -->
}
\newcommand{\subsection}[1]{### #1}

<!-- theorem_name, label, title, statement-->
\newcommand{\theoremcounter}[4]{
\increment{}
\recordTheoremNumber{!#2}
\generateLabel{!#2}
@@colorblock #1 \getTheoremNumber{} \generateTheoremName{!#3} \\ <!-- newline -->
!#4
@@
}

<!-- \command{label}{name}{statement} -->
\newcommand{\definition}[3]{\theoremcounter{\bold{Definition}}{#1}{#2}{#3}}
\newcommand{\lemma}[3]{\theoremcounter{\bold{Lemma}}{#1}{#2}{#3}}
\newcommand{\prop}[3]{\theoremcounter{\bold{Proposition}}{#1}{#2}{#3}}
\newcommand{\theorem}[3]{\theoremcounter{\bold{Theorem}}{#1}{#2}{#3}}
\newcommand{\example}[3]{\theoremcounter{\bold{Example}}{#1}{#2}{#3}}
\newcommand{\remark}[3]{\theoremcounter{\bold{Remark}}{#1}{#2}{#3}}
\newcommand{\proof}[1]{
@@proof \\ <!-- new line -->
!#1
@@
\\ <!-- new line-->
}


\newcommand{\pycode}[2]{
```julia:!#1
#hideall
using PyCall
lines = replace("""!#2""", r"(^|\n)([^\n]+)\n?$" => s"\1res = \2")
py"""
$$lines
"""
println(py"res")
```
```python
#2
```
\codeoutput{!#1}
}


<!-- display C code with syntax highlight-->
\newcommand{\Ccode}[2]{
```julia:!#1
#hideall
using Markdown

mdC_code = Markdown.htmlesc(raw"""!#2""")
mdC_code = raw"""!#2"""


mdfile = joinpath(dirname(@OUTPUT), "!#1.md")
open(mdfile,"w") do f
    print(f, mdC_code)
end

C_code=raw"""
!#2
"""

exefile = tempname()

#=
This trick is taken from

https://discourse.julialang.org/t/how-to-make-a-c-function-compiled-by-myself-available-to-ccall/7972/26
=#

open(`gcc -Wall -O2 -march=native -xc -o $exefile -`, "w") do f
    print(f, C_code)
end

run(`$exefile`)
```

\input{c}{!#1.md}
}

<!-- run C code and display code and its result -->
\newcommand{\Cexec}[2]{
\Ccode{!#1}{!#2}

\codeoutput{!#1}

}

<!-- display Rust code with syntax highlight-->
\newcommand{\rustcode}[2]{
```julia:!#1
#hideall
using Markdown

mdrs_code = Markdown.htmlesc(raw"""!#2""")
mdrs_code = raw"""!#2"""



mdfile = joinpath(dirname(@OUTPUT), "!#1.md")
open(mdfile,"w") do f
    print(f, mdrs_code)
end

rs_code=raw"""
!#2
"""

exefile = tempname()

#=
This trick is taken from

https://discourse.julialang.org/t/how-to-make-a-c-function-compiled-by-myself-available-to-ccall/7972/26
=#

open(`rustc -o $exefile -`, "w") do f
    print(f, rs_code)
end

run(`$exefile`)
```

\input{rust}{!#1.md}
}

<!-- run Rust code and display code and its result -->
\newcommand{\rustexec}[2]{
\rustcode{!#1}{!#2}

\codeoutput{!#1}

}
