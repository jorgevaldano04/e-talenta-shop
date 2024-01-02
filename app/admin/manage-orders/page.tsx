import Container from "@/app/components/nav/Container"
import { getCurrentUser } from "@/actions/getCurrentUser"
import NullData from "@/app/components/products/NullData"
import ManageOrdersClient from "./ManageOrdersClient"
import getOrders from "@/actions/getOrders"

const ManageOrders = async() => {

  const orders = await getOrders()
  const currentUser = await getCurrentUser()

  if(!currentUser || currentUser.role !== 'ADMIN'){
    return <NullData title="Oops! access denied" />
  }

  return <div className="pt-8">
    <Container>
    <ManageOrdersClient orders= {orders}/>
    </Container>
    </div>
}

export default ManageOrders;