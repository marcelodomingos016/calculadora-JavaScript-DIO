
function calculadora() {
    const operacao = Number(prompt('Escolha uma Operação:\n\n 1- Adição (+) \n 2- Subtração (-) \n 3- Multiplicação (*)\n 4- Divisão-Real (/) \n 5- Divisção-Inteira (%) \n 6- Potenciação (**)'))

    if (!operacao || operacao >= 7) {
        alert('ERRO - Operação Inválida! ')
        calculadora()
    } else {
        let n1 = Number(prompt('Insira o primeiro valor a ser calculado:'))
        let n2 = Number(prompt('Insira o segundo valor a ser calculado:'))
        let resultado

        if (!n1 || !n2) {
            alert('ERRO - Paramentros Errados')
            calculadora()
        } else {
            function adicao() {
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }

            function subtracao() {
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }

            function multiplicacao() {
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisaoInteira() {
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisaoreal() {
                resultado = n1 % n2
                alert(`${n1} % ${n2} = ${resultado}`)
                novaOperacao()
            }

            function potenciacao() {
                resultado = n1 ** n2
                alert(`${n1} ** ${n2} = ${resultado}`)
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Quer fazer uma nova operação? \n 1- SIM \n 2- NÃO')

                if (opcao == 1) {
                    calculadora()
                } else if (opcao == 2) {
                    alert('Ok, Até mais!')
                } else {
                    alert('Inválido! digite uma opção válida:')
                    novaOperacao()
                }
            }
        }

       switch (operacao) {
            case 1:
                adicao()
                break
            case 2:
                subtracao()
                break
            case 3:
                multiplicacao()
                break
            case 4:
                divisaoInteira()
                break
            case 5:
                divisaoreal()
                break
            case 6:
                potenciacao()
                break
        }
    }
}

calculadora()