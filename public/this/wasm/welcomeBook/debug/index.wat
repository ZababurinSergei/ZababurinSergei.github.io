(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32776))
 (global $~lib/memory/__heap_base i32 (i32.const 32776))
 (memory $0 0)
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "add" (func $assembly/index/add))
 (export "fib" (func $assembly/index/fib))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.add
  return
 )
 (func $assembly/index/fib (param $n i32) (result i32)
  (local $a i32)
  (local $b i32)
  (local $t i32)
  i32.const 0
  local.set $a
  i32.const 1
  local.set $b
  local.get $n
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    local.get $n
    i32.const 1
    i32.sub
    local.tee $n
    if
     local.get $a
     local.get $b
     i32.add
     local.set $t
     local.get $b
     local.set $a
     local.get $t
     local.set $b
     br $while-continue|0
    end
   end
   local.get $b
   return
  end
  local.get $a
  return
 )
)
