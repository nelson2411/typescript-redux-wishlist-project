import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/gameSlice';
import { RootState } from '../../redux/store';
import { Table, Image, Badge } from 'react-bootstrap';
import { CartContainer } from './CartTable.styles';
import { FcElectronics } from 'react-icons/fc';
import { FaTrashAlt } from 'react-icons/fa';

const CartTable = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Name</th>
            <th>Year of Release</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>Platforms:</th>
            <th>Price</th>
            <th>Remove from cart</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <h3>
              <FcElectronics size={70} />
              Ooops, you must add countries to the cart!
            </h3>
          ) : null}
          {cart.map((item) => (
            <tr key={item.id}>
              <td className='p-3'>
                <Image
                  src={item.image}
                  alt={item.name}
                  className='rounded mx-auto d-block'
                  width={125}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.genre}</td>
              <td>{item.publisher}</td>
              <td>
                {item.platforms.map((platform, index) => (
                  <Badge key={index} bg='secondary' className='my-1 mx-2 px-3 py-2'>
                    <h6>{platform}</h6>
                  </Badge>
                ))}
              </td>
              <td>{item.price}</td>
              <td>
                <FaTrashAlt size={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CartTable;
