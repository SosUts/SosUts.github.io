@def hascode=true
@def isjulia =true

# JuliaConで学ぶメタプログラミング

[Introduction to metaprogramming in Julia](https://youtu.be/2QLhw6LVaq0)でメタプログラミングやマクロについて理解したい！  
Steven Johnson's [keynote talk](https://www.youtube.com/watch?v=mSgXWpvQEHE
)もメタプログラミングの理解にとても役立つらしい。  

動画を見て大事そうな言葉をメモったり、リポジトリ(https://github.com/dpsanders/Metaprogramming_JuliaCon_2021)に書いてあることを自分の言葉に直していこうとおもう。

- [JuliaConで学ぶメタプログラミング](#juliaconで学ぶメタプログラミング)
  - [メタプログラミングとは](#メタプログラミングとは)
  - [なぜメタプログラミングが必要なのか](#なぜメタプログラミングが必要なのか)

## メタプログラミングとは

他のコードを書くことができるコード。通常のコードはデータを操作するだけ。  
メタとはいうのは、上位のみたいなニュアンス。Meta-analysis的な奴。  

## なぜメタプログラミングが必要なのか

メタプログラミングは必ずしも必要ではない。メタプログラミングでできることは、全てメタプログラミング**ではない**方法で実現可能。  
ただし、メタプログラミングによって楽になる作業がある。

```julia
function myshow(y)
    println("The value is $y")
end

x = 2
y = x + 1
myshow(x)
```
これだとたしかに変数の値はわかるが、値しかわからない。どの変数がどんな値か知るには、マクロを使うしかない。

This is some julia code:
```julia:./code_pg1/ex1
using LinearAlgebra
a = [1, 2, 3]
@show dot(a, a)
```

\output{./code_pg1/ex1}

`@show`のほうが便利なのは一目瞭然。マクロは変数そのものにアクセスできる。

```julia
using Distributions
function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

```