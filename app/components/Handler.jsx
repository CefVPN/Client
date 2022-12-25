import React from 'react'

export function Handler() {
  window.str_cr();
}

export function Disconnect()
{
  window.dis_cr();
}

export function Close_WND()
{
  window.hide_wnd();
}

export function Min_WND()
{
  window.min_wnd();
}

export function Max_WND()
{
  window.max_wnd();
}

export function OnMaxButtonEnter() {
  window.OnSnapLayouts(true);
}

export function OnMaxButtonLeave() {
  window.OnSnapLayouts(false);
}
