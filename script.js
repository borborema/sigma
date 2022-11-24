let Reserva = document.getElementById('btn-rr')



function  ReservaBtn()
{
    let MsgLayout = document.querySelector('#rr-div')

    if(MsgLayout.style.marginLeft == '-100vw')
    {
        MsgLayout.style.marginLeft = '100px'
    }     
    else
    {
        MsgLayout.style.marginLeft = '-100vw'
    }        
}   
