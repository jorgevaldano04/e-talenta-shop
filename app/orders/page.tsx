import Container from "@/app/components/nav/Container"
import { getCurrentUser } from "@/actions/getCurrentUser"
import NullData from "@/app/components/products/NullData"
import OrdersClient from "./OrderClient"
import getOrders from "@/actions/getOrders"
import getOrdersByUserId from "@/actions/getOrdersByUserId"

const Orders = async() => {

  const currentUser = await getCurrentUser()

  if(!currentUser){
    return <NullData title="Oops! access denied" />
  }

  const orders = await getOrdersByUserId(currentUser.id)

  if(!orders){
    return <NullData title="No orders yet..." />
  }

  return <div className="pt-8">
    <Container>
    <OrdersClient orders= {orders}/>
    </Container>
    </div>
}

export default Orders;