//Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista.

function howManyDepartments(objeto){
    depertamentos=[]
for(let i=0;i<objeto.length;i++){
    depertamentos.push(objeto[i].departamentName)
}
return `${depertamentos.length} departamentos`
}
console.log(howManyDepartments(listDepartment))

//Desenvolva uma função chamada ChangeDepartmentName que deverá receber o nome atual do departamento e um novo nome para ser atribuído a ele.

function ChangeDepartmentName(atual,novoNome){
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==atual){
         listDepartment[i].departamentName==novoNome
         return listDepartment[i]
        }
        else{return "Departament not found"}
    }
}
console.log(ChangeDepartmentName('Financial','Financeiro'))

//Desenvolva uma função chamada giveTheDepartmentABreak que alterne o valor da variável working, sempre que chamada.

function giveTheDepartmentABreak(nomeDepartmaneto){
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==nomeDepartmaneto){
            listDepartment[i].working= !listDepartment[i].working
            return listDepartment[i]
        }
        
    }
    return "Departament not found"

}
console.log(giveTheDepartmentABreak('expedition'))

//Desenvolva uma função chamada insertNewDepartament que consiga adicionar novos departamentos a lista. A função deverá receber um novo departamento com:

function insertNewDepartament(lista){
let novoD={departamentName:"",
employees:[],
working:""
}
novoD.departamentName=lista.departamentName
novoD.employees=lista.employees
novoD.working=lista.working

listDepartment.push(novoD)
return listDepartment
}
console.log(insertNewDepartament({departamentName: 'Marketing', employees: [], working: true}))

//5.Desenvolva uma função chamada inserNewEmployeeInDepartament que consiga adicionar um novo funcionário ao departamento.A função deve receber o nome do departamento como parâmetro e um objeto pessoa com:

function inserNewEmployeeInDepartament(departamento,pessoa){
let novoEmpl={
    name:"",
    age:0,
    responsibility:"",
    salary:0,
}
novoEmpl.name=pessoa.name;
novoEmpl.age=pessoa.age;
novoEmpl.responsibility=pessoa.responsibility;
novoEmpl.salary=pessoa.salary;
for(let i=0;i<listDepartment.length;i++){
if(listDepartment[i].departamentName==departamento){
    listDepartment[i].employees.push(novoEmpl)
    return listDepartment[i]
}
else if(listDepartment[i].departamentName!==departamento){
    return 'Departament not found'
}
}

}
console.log(inserNewEmployeeInDepartament( 'Financial', {name:'Rosemary', age:44, responsibility: 'Financial expedition director', salary: 15600}))

//6. Desenvolva uma função chamada howManyEmployeesInDepartament que recebe o nome do departamento como parâmetro e que consiga verificar quantos funcionários estão lotados naquele departamento.

function howManyEmployeesInDepartament(departamento){
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            return listDepartment[i].employees.length
        }
    }
    return "Departament not found"
}

console.log(howManyEmployeesInDepartament("Financial"))

//7. Desenvolva uma função chamada departamentPayrollCalculation que recebe o nome do departamento como parâmetro e que consiga realizar a soma dos salários de todos os funcionários do departamento.
function departamentPayrollCalculation(departamento){
    let salarios=[]
    let soma=0
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            for(let j=0;j<listDepartment[i].employees.length;j++){
               salarios.push(listDepartment[i].employees[j].salary)
               
            }
            for(let k=0;k<salarios.length;k++){
                soma+=salarios[k]

            }
            return soma
        }
        
}
return "Departament not found"

}
console.log(departamentPayrollCalculation('Financial'))

//8.Desenvolva uma função chamada isTheDepartamentYoungOrOld que recebe o nome do departamento como parâmetro e que consiga realizar o calculo da média das idades dos funcionários do departamento.
function isTheDepartamentYoungOrOld(departamento){
    let idades=[]
   let soma=0
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            for(let j=0;j<listDepartment[i].employees.length;j++){
               idades.push(listDepartment[i].employees[j].age)
               
            }
            for(let k=0;k<idades.length;k++){
                soma+=idades[k]

            }
          let media=soma/idades.length
          if (media<35){
            return `The avaraege is ${media.toFixed(2)}: department young`
          }
          else if(media>=35){
            return `The avaraege is ${media.toFixed(2)}: department Expert`
          }
        }
        
}
return "Departament not found"
}
console.log(isTheDepartamentYoungOrOld('capitation'))

//9.Desenvolva uma função chamada departamentAverageSalary que recebe o nome do departamento como parâmetro e que consiga calcular a média dos salários pagos naquele departamento. Se o departamento não for encontrado, retorne: "Departament not found". Ao fazer o retorno da média, trate as dizimas periódicas, retorne o valor com apenas duas casas após a vírgula. Com departmento encontrado e a média tratada e realizada, retorne: 'This departament average salary: 
function departamentAverageSalary(departamento){
    let salarios=[]
    let soma=0
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            for(let j=0;j<listDepartment[i].employees.length;j++){
               salarios.push(listDepartment[i].employees[j].salary)
               
            }
            for(let k=0;k<salarios.length;k++){
                soma+=salarios[k]

            }
            media=soma/salarios.length
            return `This departament avarage salary is: ${media.toFixed(2)}`
        }
        
}
return "Departament not found"

}
console.log(departamentAverageSalary("capitation"))
//10. Desenvolva uma função chamada departamentSituation que consiga definir se o departamento está saudável ou não.

//Para isso você vai receber três parâmetros:

//departamentName - O nome do departamento que deseja consultar.
//maximumPayrollAmount - O valor máximo que o departamento pode ter com a folha de pagamento.


//Primeiro vou criar funcoes para facilitar
function payrollAmount(departamento){
    let salarios=[]
    let soma=0
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            for(let j=0;j<listDepartment[i].employees.length;j++){
               salarios.push(listDepartment[i].employees[j].salary)
               
            }
            for(let k=0;k<salarios.length;k++){
                soma+=salarios[k]

            }
            return soma
        }       
}
}
function employeesAmount(departamento){
    let employess=0
    for(let i=0;i<listDepartment.length;i++){
        if(listDepartment[i].departamentName==departamento){
            employess= listDepartment[i].employees.length
        }
    }
    return employess
}

function departamentSituation(departamentName,maximumPayrollAmount,MaximumAmountOfEmployees)
{
let payamount=payrollAmount(departamentName)
let employes= employeesAmount(departamentName)
for(let i=0;i<listDepartment.length;i++){
    if(listDepartment[i].departamentName==departamentName){
        if(payamount<=maximumPayrollAmount && employes<=MaximumAmountOfEmployees){
            return "The department is healthy"
        }
        else if(payamount>maximumPayrollAmount ||employes>MaximumAmountOfEmployees){
            return 'The department needs attention'
        }
    }
}
return  "Departament not found"
}
console.log(departamentSituation('capitation', 100000,6)

)